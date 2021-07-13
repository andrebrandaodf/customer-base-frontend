import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private showNavBar: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) { }
  ngOnInit() {
    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
        if (mode !== null) {
          this.showNavBar = mode;
        }
      }
    );
  }

  isAuth() {
    return this.authService.usuarioEstaAutenticado();
  }

  onLogout() {
    this.authService.logout();
  }
}