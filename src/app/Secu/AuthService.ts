import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Cookies from "js-cookie";
import {map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isConnected = false;
  onConnexion = new Subject<void>();
  isAdminStatus: boolean = false;

  constructor(private http: HttpClient) {
    this.isAdminStatus = JSON.parse(Cookies.get('isAdmin') || 'false');
  }

  connect() {
    this.isConnected = true;
  }

  logout() {
    this.isConnected = false;
    Cookies.remove('access_token');
    Cookies.remove('isAdmin');
  }


  isLoggedIn() {
    return !!Cookies.get('access_token');
  }

  getToken() {
    return Cookies.get('access_token');
  }


  isAdmin(): Observable<boolean> {
    return this.http.get<{ role: string[] }>('http://localhost:8080/userinfo').pipe(
      map(response => {
        const isAdmin = response.role.includes('ADMINISTRATEUR');
        Cookies.set('isAdmin', JSON.stringify(isAdmin));
        return isAdmin;
      })
    );
  }
}
