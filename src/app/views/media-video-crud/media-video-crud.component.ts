import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-video-crud',
  templateUrl: './media-video-crud.component.html',
  styleUrls: ['./media-video-crud.component.css'],
})
export class MediaVideoCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Videos',
      icon: 'movie',
      routeUrl: '/media',
    };
  }

  ngOnInit(): void {}

  navigateToMediaVideoCreate(): void {
    this.router.navigate(['admin/media/create']);
  }
}
