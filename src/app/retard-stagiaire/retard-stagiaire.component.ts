import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retard-stagiaire',
  templateUrl: './retard-stagiaire.component.html',
  styleUrls: ['./retard-stagiaire.component.css']
})
export class RetardStagiaireComponent {
  retard: string ="";
  motif: string ="";
  justificatif : File | null = null;

  constructor(private http: HttpClient, private router: Router) { }


  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length > 0) {
      this.justificatif = target.files[0];
    }
  }

  declarerRetard() {
    if (!this.validation()) {
      alert("Veuillez fournir toutes les informations requises.");
      return;
    }
    const formData = new FormData();
    formData.append('finAbsence', this.retard);
    formData.append('motif', this.motif);
    if (this.justificatif) {
      formData.append('justificatif', this.justificatif, this.justificatif.name);
    }

    this.http.post('http://localhost:8080/absence', formData, {responseType: 'text'}).subscribe(response => {

      alert("Votre déclaration a bien été prise en compte, vous allez être redirigé vers le menu.");
      this.retard = "";
      this.motif = "";
      this.justificatif = null;
      this.router.navigate(['/menu']);
    }, error => {
      console.error("Erreur lors de l'envoi de la déclaration : ", error);

      alert("Il y a eu une erreur lors de l'envoi de votre déclaration. Veuillez réessayer plus tard.");
    });
  }
  validation(): boolean {
    const retard = new Date(this.retard);
    const motifNonVide = this.motif && this.motif.trim() !== '';

    return !!(retard.getTime() === retard.getTime() && motifNonVide);
  }
}
