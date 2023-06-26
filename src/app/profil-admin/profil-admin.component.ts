import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent {

  candidats: any[] = [];

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


}
