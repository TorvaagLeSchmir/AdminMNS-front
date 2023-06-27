import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent {

  prenom = "";
  nom = "";
  candidats: any[] = [];
  stagiaires: any[] = [];
  selectedStagiaireDetails: any;
  selectedCandidatIndex: number | null = null;
  selectedStagiaireIndex: number | null = null;

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.getCandidats();
    this.getStagiaires()
  }

  getStagiaires(): void {
    this.http.get<any[]>("http://localhost:8080/admin/stagiaires").subscribe(stagiairesData => {
      this.stagiaires = stagiairesData.map(data => {
        return data;
      });
    });
  }




  getCandidats(): void {
    this.http.get<any[]>('http://localhost:8080/admin/profil/candidats').subscribe(candidatsData => {
      this.candidats = candidatsData.map(data => {
        return {
          personne: data.personne,
          infos: data.infos
        }
      });
    });
  }
  openDocument(url: string): void {
    window.open(url, '_blank');
  }
  getFilename(path: string): string {
    return <string>path.split('/').pop();
  }
  selectCandidat(index: number): void {
    if (this.selectedCandidatIndex === index) {
      this.selectedCandidatIndex = null;
    } else {
      this.selectedCandidatIndex = index;
    }
  }
  selectStagiaire(index: number): void {
    if (this.selectedStagiaireIndex === index) {
      this.selectedStagiaireIndex = null;
      this.selectedStagiaireDetails = null;
    } else {
      this.selectedStagiaireIndex = index;
      this.getAbsencesRetards(this.stagiaires[index]);
    }
  }

  accepterCandidature(candidat: any): void {
    const idPersonne = candidat.personne.id;
    this.http.put('http://localhost:8080/admin/accepter-candidature/' + idPersonne, {}).subscribe(() => {
      candidat.accepte = true;
      this.candidats.splice(this.candidats.indexOf(candidat), 1);
      this.selectedCandidatIndex = null;
      this.getStagiaires();

    }, (error) => {
      console.error(error);
      alert("Une erreur s'est produite lors de la tentative d'acceptation de la candidature.")
    });
  }

  refuserCandidature(candidat: any): void {
    const idPersonne = candidat.personne.id;
    this.http.put('http://localhost:8080/admin/refuser-candidature/' + idPersonne, {}).subscribe(() => {
      candidat.accepte = true;

      this.candidats.splice(this.candidats.indexOf(candidat), 1);
      this.selectedCandidatIndex = null;

    }, (error) => {
      console.error(error);
      alert("Une erreur s'est produite lors de la tentative de refus de candidature.")
  });
  }
  getAbsencesRetards(stagiaire: any): void {
    const idStagiaire = stagiaire.id;
    this.http.get('http://localhost:8080/admin/stagiaires/' + idStagiaire + '/absences').subscribe(absences => {
      console.log(absences);
      this.http.get('http://localhost:8080/admin/stagiaires/' + idStagiaire + '/retards').subscribe(retards => {
        console.log(retards);

        this.selectedStagiaireDetails = {
          prenom: stagiaire['prénom'],
          nom: stagiaire.nom,
          absences: absences,
          retards: retards
        };
      }, (error) => {
        console.error(error);
        alert("Une erreur s'est produite lors de la récupération des retards du stagiaire.")
      });
    }, (error) => {
      console.error(error);
      alert("Une erreur s'est produite lors de la récupération des absences du stagiaire.")
    });
  }


}
