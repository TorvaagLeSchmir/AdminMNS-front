import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./Connexion/Connexion.component";
import {InscriptionComponent} from "./Inscription/Inscription.component";
import {HomeComponent} from "./home/home.component";
import {MenuStagiaireComponent} from "./menu-stagiaire/menu-stagiaire.component";
import {MenuAdminComponent} from "./menu-admin/menu-admin.component";
import {AbsenceStagiaireComponent} from "./absence-stagiaire/absence-stagiaire.component";
import {AbsenceAdminComponent} from "./absence-admin/absence-admin.component";
import {RetardStagiaireComponent} from "./retard-stagiaire/retard-stagiaire.component";
import {RetardAdminComponent} from "./retard-admin/retard-admin.component";
import {DocumentStagiaireComponent} from "./document-stagiaire/document-stagiaire.component";
import {DocumentAdminComponent} from "./document-admin/document-admin.component";
import {ProfilStagiaireComponent} from "./profil-stagiaire/profil-stagiaire.component";
import {ProfilAdminComponent} from "./profil-admin/profil-admin.component";
import {AdminGuard} from "./Guards/admin.guard";
import {StagiaireGuard} from "./Guards/stagiaire.guard";


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "menu", component: MenuStagiaireComponent, canActivate: [StagiaireGuard]},
  {path: "admin/menu", component: MenuAdminComponent, canActivate: [AdminGuard]},
  {path: "absence", component: AbsenceStagiaireComponent, canActivate: [StagiaireGuard]},
  {path: "admin/absence", component: AbsenceAdminComponent, canActivate: [AdminGuard]},
  {path: "retard", component: RetardStagiaireComponent, canActivate: [StagiaireGuard]},
  {path: "admin/retard", component: RetardAdminComponent, canActivate: [AdminGuard]},
  {path: "document", component: DocumentStagiaireComponent, canActivate: [StagiaireGuard]},
  {path: "admin/document", component: DocumentAdminComponent, canActivate: [AdminGuard]},
  {path: "profil", component: ProfilStagiaireComponent, canActivate: [StagiaireGuard]},
  {path: "admin/profil", component: ProfilAdminComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
