import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-absence-stagiaire',
  templateUrl: './absence-stagiaire.component.html',
  styleUrls: ['./absence-stagiaire.component.css']
})
export class AbsenceStagiaireComponent {
  debutAbsence: string ="";
  finAbsence: string ="";
  motif: string ="";
  justificatif : File | null = null;

  constructor(private http: HttpClient, private router: Router) { }


  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length > 0) {
      this.justificatif = target.files[0];
    }
  }

  declarerAbsence() {
    if (!this.validation()) {
      alert("Veuillez fournir toutes les informations requises.");
      return;
    }
    const formData = new FormData();
    formData.append('debutAbsence', this.debutAbsence);
    formData.append('finAbsence', this.finAbsence);
    formData.append('motif', this.motif);
    if (this.justificatif) {
      formData.append('justificatif', this.justificatif, this.justificatif.name);
    }

    this.http.post('http://localhost:8080/absence', formData, {responseType: 'text'}).subscribe(response => {

      alert("Votre déclaration a bien été prise en compte, vous allez être redirigé vers le menu.");
      this.debutAbsence = "";
      this.finAbsence = "";
      this.motif = "";
      this.justificatif = null;
      this.router.navigate(['/menu']);
    }, error => {
      console.error("Erreur lors de l'envoi de la déclaration : ", error);

      alert("Il y a eu une erreur lors de l'envoi de votre déclaration. Veuillez réessayer plus tard.");
    });
  }
  validation(): boolean {
    const debutDate = new Date(this.debutAbsence);
    const finDate = new Date(this.finAbsence);
    const motifNonVide = this.motif && this.motif.trim() !== '';

    return !!(finDate >= debutDate && motifNonVide);

    }
}
