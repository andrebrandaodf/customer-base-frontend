import { HeaderService } from '../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-crud',
  templateUrl: './video-crud.component.html',
  styleUrls: ['./video-crud.component.scss'],
})
export class VideoCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Videos',
      icon: 'movie',
      routeUrl: '/video',
    };
  }

  ngOnInit(): void { }

  navigateToVideoCreate(): void {
    this.router.navigate(['admin/video/create']);
  }
}
