import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-crud',
  templateUrl: './blog-crud.component.html',
  styleUrls: ['./blog-crud.component.scss'],
})
export class BlogCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/blog',
    };
  }

  ngOnInit(): void {}

  navigateToBlogCreate(): void {
    this.router.navigate(['admin/blog/create']);
  }
}
