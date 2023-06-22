import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './inscription.component.html',
  styleUrls: ['./Inscription.component.css']
})
export class InscriptionComponent {

  HttpClient: any;

  prenom = "";
  nom = "";
  date_de_naissance: string = "";
  adresse = "";
  code_postal = "";
  ville = "";
  telephone = "";
  email = "";
  nationalite = "";
  diplome = "";
  formation_type = "";
  amenagements = "";
  amenagementsInfo = "";
  tiers_temps = "";
  langages = "";
  projets_url = "";
  formation_interesse = "";
  choix_mns = "";
  choix_formation = "";
  projet_pro = "";
  secteur_stage = "";
  qualites = "";
  defauts = "";
  passions = "";
  niveau_anglais = "";
  autre_langue = "";
  autre_langueInfo = "";
  permis_b = "";
  vehicule = "";
  mobilite = "";
  expatriation_stage = "";
  connu_mns = "";
  photo: File | null = null;
  copie_id: File | null = null;
  cv: File | null = null;
  copie_diplome: File | null = null;
  bulletins_notes: File | null = null;
  lettre_motivation: File | null = null;
  acceptation_politique = "";
  ancien_stagiaire_prenom = "";
  ancien_stagiaire_nom = "";
  ancien_stagiaire_formation = "";


  constructor(private http: HttpClient, private router: Router) {
  }

accepteConditions() : boolean{
    return Boolean(this.acceptation_politique);
}

  onPhotoSelected(event: any) {
    this.photo = event.target.files[0];
  }

  onCopieIdSelected(event: any) {
    this.copie_id = event.target.files[0];
  }

  onCvSelected(event: any) {
    this.cv = event.target.files[0];
  }

  onCopieDiplomeSelected(event: any) {
    this.copie_diplome = event.target.files[0];
  }

  onBulletinsNotesSelected(event: any) {
    this.bulletins_notes = event.target.files[0];
  }

  onLettreMotivationSelected(event: any) {
    this.lettre_motivation = event.target.files[0];
  }

  inscription(): void {
    const url = 'http://localhost:8080/inscription';

    const data = {
      prenom: this.prenom,
      nom: this.nom,
      date_de_naissance: this.date_de_naissance,
      adresse: this.adresse,
      code_postal: this.code_postal,
      ville: this.ville,
      telephone: this.telephone,
      email: this.email,
      nationalite: this.nationalite,
      diplome: this.diplome,
      formation_type: this.formation_type,
      amenagements: this.amenagements,
      amenagementsInfo: this.amenagementsInfo,
      tiers_temps: this.tiers_temps,
      langages: this.langages,
      projets_url: this.projets_url,
      formation_interesse: this.formation_interesse,
      choix_mns: this.choix_mns,
      choix_formation: this.choix_formation,
      projet_pro: this.projet_pro,
      secteur_stage: this.secteur_stage,
      qualites: this.qualites,
      defauts: this.defauts,
      passions: this.passions,
      niveau_anglais: this.niveau_anglais,
      autre_langue: this.autre_langue,
      autre_langueInfo: this.autre_langueInfo,
      permis_b: this.permis_b,
      vehicule: this.vehicule,
      mobilite: this.mobilite,
      expatriation_stage: this.expatriation_stage,
      connu_mns: this.connu_mns,
      ancien_stagiaire_prenom: this.ancien_stagiaire_prenom,
      ancien_stagiaire_nom: this.ancien_stagiaire_nom,
      ancien_stagiaire_formation: this.ancien_stagiaire_formation,
      acceptation_politique: this.acceptation_politique
    };

    const formData = new FormData();
    formData.append('inscriptionData', JSON.stringify(data));

    if (this.photo) {
      formData.append('photo', this.photo, this.photo.name);
    }

    if (this.copie_id) {
      formData.append('copie_id', this.copie_id, this.copie_id.name);
    }

    if (this.cv) {
      formData.append('cv', this.cv, this.cv.name);
    }

    if (this.copie_diplome) {
      formData.append('copie_diplome', this.copie_diplome, this.copie_diplome.name);
    }

    if (this.bulletins_notes) {
      formData.append('bulletins_notes', this.bulletins_notes, this.bulletins_notes.name);
    }

    if (this.lettre_motivation) {
      formData.append('lettre_motivation', this.lettre_motivation, this.lettre_motivation.name);
    }



    this.http.post(url, formData).subscribe(
      () => {
        this.router.navigate(['/home']).then(() => {
          alert("Inscription réussie, vous allez être redirigé vers la page d'accueil.");
        });
      },
      (error) => {
        alert("Il y a eu une erreur lors de votre inscription, veuillez réessayer.");
      }
    );
  }
}
