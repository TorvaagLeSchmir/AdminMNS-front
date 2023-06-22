import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-absence-admin',
  templateUrl: './absence-admin.component.html',
  styleUrls: ['./absence-admin.component.css']
})
export class AbsenceAdminComponent {

  absences: any[] = [];
  personnes: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAbsencesNonVerifiees();
    this.getAbsencePersonne();
  }

  getAbsencesNonVerifiees(): void {
    this.http.get<any[]>('http://localhost:8080/admin/absence').subscribe(absences =>{
      this.absences = absences});
  }
  getAbsencePersonne():void {
    this.http.get<any[]>('http://localhost:8080/admin/absencePersonne').subscribe(personnes =>{
      this.personnes = personnes});
  }

  justifierAbsence(id: number): void {
    this.http.put(`http://localhost:8080/admin/absence/${id}`, { isJustified: true }).subscribe(() => {
      this.getAbsencesNonVerifiees();
      this.getAbsencePersonne();
    });
  }

  pasJustifierAbsence(id: number): void {
    this.http.put(`http://localhost:8080/admin/absence/${id}`, { isJustified: false }).subscribe(() => {
      this.getAbsencesNonVerifiees();
      this.getAbsencePersonne();
    });
  }
  getFilename(path: string): string {
    return <string>path.split('/').pop();
  }
  openJustificatif(url: string) {
    window.open(url, '_blank');
  }

}
