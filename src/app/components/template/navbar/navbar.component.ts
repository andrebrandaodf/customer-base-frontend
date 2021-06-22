import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: User = new User();
  private showNavBar: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showNavBarEmitter.subscribe((mode: boolean) => {
      if (mode !== null) {
        this.showNavBar = mode;
      }
    });
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}
