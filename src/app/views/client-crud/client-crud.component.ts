import { HeaderService } from '../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'storefront',
      routeUrl: '/client',
    };
  }

  ngOnInit(): void { }

  navigateToProductCreate(): void {
    this.router.navigate(['admin/client/create']);
  }
}
