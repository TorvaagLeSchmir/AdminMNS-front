import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-retard-admin',
  templateUrl: './retard-admin.component.html',
  styleUrls: ['./retard-admin.component.css']
})
export class RetardAdminComponent {
  absences: any[] = [];
  personnes: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRetardsNonVerifies();
    this.getRetardPersonne();
  }

  getRetardsNonVerifies(): void {
    this.http.get<any[]>('http://localhost:8080/admin/retard').subscribe(absences =>{
      this.absences = absences});
  }
  getRetardPersonne():void {
    this.http.get<any[]>('http://localhost:8080/admin/retardPersonne').subscribe(personnes =>{
      this.personnes = personnes});
  }
  justifierRetard(id: number): void {
    this.http.put(`http://localhost:8080/admin/absence/${id}`, { isJustified: true }).subscribe(() => {
      this.getRetardsNonVerifies();
      this.getRetardPersonne();
    });
  }

  pasJustifierRetard(id: number): void {
    this.http.put(`http://localhost:8080/admin/absence/${id}`, { isJustified: false }).subscribe(() => {
      this.getRetardsNonVerifies();
      this.getRetardPersonne();
    });
  }
  getFilename(path: string): string {
    return <string>path.split('/').pop();
  }
  openJustificatif(url: string) {
    window.open(url, '_blank');
  }

}
