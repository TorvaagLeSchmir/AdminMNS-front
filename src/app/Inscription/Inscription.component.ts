import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './inscription.component.html',
  styleUrls: ['./Inscription.component.css']
})
export class InscriptionComponent {

  pseudoInscription = "";
  motDePasseInscription = "";
  prenom = "";
  nom = "";
  HttpClient: any;

  constructor(private http: HttpClient, private router: Router) {
  }


  inscription(): void {
    const url = 'http://localhost:8080/inscription';

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      emailMNS: this.pseudoInscription,
      motDePasse: this.motDePasseInscription,
      prenom: this.prenom,
      nom: this.nom
    };

    this.http.post(url, body).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/connexion']).then(
          () => {
            console.log('Inscription réussie');
          },
          (err) => {
            alert("Vous n'avez pas les droits nécessaires pour accéder à cette ressource.");
          }
        );
      },
      error: error => console.log(error)
    });
  }
}
