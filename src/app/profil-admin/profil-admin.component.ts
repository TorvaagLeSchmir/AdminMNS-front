import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent {

  candidats: any[] = [];
  photoUrls: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCandidats();
  }

  getCandidats(): void {
    this.http.get<any[]>('http://localhost:8080/admin/profil/candidats').subscribe(candidats => {
      this.candidats = candidats;
    });
  }


}
