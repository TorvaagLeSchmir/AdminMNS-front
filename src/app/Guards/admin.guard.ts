import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../Secu/AuthService";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {
    constructor(
      private authService: AuthService,
      private router: Router
  ) {}

      canActivate(): boolean {
        return this.authService.isAdminStatus;
      }
    }
