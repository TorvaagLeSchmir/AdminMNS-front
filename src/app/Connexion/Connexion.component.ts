import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {AuthService} from "../Secu/AuthService";
import Cookies from 'js-cookie';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./Connexion.component.css']
})
export class ConnexionComponent {


  hidePassword = true;
  username = "";
  password = "";
  HttpClient: any;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  estConnecte(): boolean {
    return !!Cookies.get('access_token');
  }

  connexion(): void {
    this.authService.logout();

    const url = 'http://localhost:8080/connexion';
    const body = {
      emailMNS: this.username,
      motDePasse: this.password
    };

    this.http.post(url, body, {responseType: 'text'}).subscribe({
      next: (response) => {
        Cookies.set('access_token', response, {expires: 7});
        this.authService.connect();
        this.authService.isAdmin().subscribe(isAdmin => {
          this.authService.isAdminStatus = isAdmin;
          this.authService.onConnexion.next();

          if (isAdmin) {
            this.router.navigate(['/admin/menu']); // Si l'utilisateur est un administrateur, redirigez-le vers /admin/menu
          } else {
            this.router.navigate(['/menu']); // Sinon, redirigez-le vers /menu
          }
        });
      }
    });
  }
}

