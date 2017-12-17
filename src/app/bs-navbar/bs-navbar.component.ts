import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;
  
  constructor(private authService: AuthService) { 
    authService.appUser$.subscribe(user => this.appUser = user);
  }

  logout(){
    this.authService.logout();
  }
}
