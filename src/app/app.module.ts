import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbsenceAdminComponent } from './absence-admin/absence-admin.component';
import { AbsenceStagiaireComponent } from './absence-stagiaire/absence-stagiaire.component';
import { RetardAdminComponent } from './retard-admin/retard-admin.component';
import { RetardStagiaireComponent } from './retard-stagiaire/retard-stagiaire.component';
import { DocumentAdminComponent } from './document-admin/document-admin.component';
import { DocumentStagiaireComponent } from './document-stagiaire/document-stagiaire.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ProfilStagiaireComponent } from './profil-stagiaire/profil-stagiaire.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuStagiaireComponent } from './menu-stagiaire/menu-stagiaire.component';
import {ConnexionComponent} from "./Connexion/Connexion.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {InscriptionComponent} from "./Inscription/Inscription.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CookieInterceptor} from "./Secu/Cookie.Interceptor";
import {JwtInterceptor} from "./Secu/JwtInterceptor";
import {AuthService} from "./Secu/AuthService";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    AbsenceAdminComponent,
    AbsenceStagiaireComponent,
    RetardAdminComponent,
    RetardStagiaireComponent,
    DocumentAdminComponent,
    DocumentStagiaireComponent,
    ProfilAdminComponent,
    ProfilStagiaireComponent,
    MenuAdminComponent,
    MenuStagiaireComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthService
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
