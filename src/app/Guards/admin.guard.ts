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
        console.log("AdminGuard - isAdminStatus: ", this.authService.isAdminStatus);

        return this.authService.isAdminStatus;

      }


    }
