import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent {

  candidats: any[] = [];
  selectedCandidatIndex: number | null = null; // Ajout de cette ligne

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCandidats();
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

  accepterCandidature(candidat: any): void {
    const idPersonne = candidat.personne.id;
    this.http.put('http://localhost:8080/admin/accepter-candidature/' + idPersonne, {}).subscribe(() => {
      candidat.accepte = true;
      this.candidats.splice(this.candidats.indexOf(candidat), 1); // Supprimer le candidat de la liste
    }, (error) => {
      // Gérer les erreurs de la requête
    });
  }

  refuserCandidature(candidat: any): void {
    const idPersonne = candidat.personne.id;
    this.http.put('http://localhost:8080/admin/refuser-candidature/' + idPersonne, {}).subscribe(() => {
      candidat.accepte = true;
      this.candidats.splice(this.candidats.indexOf(candidat), 1); // Supprimer le candidat de la liste
    }, (error) => {
      // Gérer les erreurs de la requête
    });
  }



}
