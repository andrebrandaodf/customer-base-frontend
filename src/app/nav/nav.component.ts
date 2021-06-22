import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: User = new User();
  private showNavBar: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) { }

  ngOnInit() {
    this.authService.showNavBarEmitter.subscribe((mode: boolean) => {
      if (mode !== null) {
        this.showNavBar = mode;
      }
    });
  }
  isAuth() {
    return this.authService.usuarioEstaAutenticado();
  }

  onLogout() {
    this.authService.logout();
  }

}
