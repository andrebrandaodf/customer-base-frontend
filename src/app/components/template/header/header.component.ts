import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showNavBar: boolean = false;
  
  constructor(private headerService: HeaderService, private authService: AuthService) { }

  ngOnInit(){
    // this.authService.showNavBarEmitter.subscribe(
    //   (mode: boolean) => {
    //     if (mode !== null) {
    //       this.showNavBar = mode;
    //     }
    //   }
    // );
  }

  get title(): string{
    return this.headerService.headerData.title;
  }

  get icon(): string{
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }

 
  // isAuth() {
  //   return this.authService.isAuthenticated();
  // }

  // onLogout() {
  //   this.authService.logout();
  // }

}
