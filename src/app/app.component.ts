import { Component } from '@angular/core';
import {AuthService} from "./Secu/AuthService";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import Cookies from "js-cookie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminMNS';
  isAdminStatus: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.authService.onConnexion.subscribe(() => {
      this.isAdminStatus = this.authService.isAdminStatus;
    });
    this.isAdminStatus = JSON.parse(Cookies.get('isAdmin') || 'false');
  }


  estConnecte(): boolean {
    return !!Cookies.get('access_token');
  }
  deconnexion(): void {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }
}
