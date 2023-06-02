import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../Secu/AuthService";

@Injectable({
  providedIn: 'root'
})
export class StagiaireGuard  {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    console.log("StagiaireGuard - isAdminStatus: ", this.authService.isAdminStatus);

    return !this.authService.isAdminStatus;
  }
}
