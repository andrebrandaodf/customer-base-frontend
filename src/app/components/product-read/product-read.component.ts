import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  product: Product[] = [];
  displayedColumns = [
    'id',
    'name',
    'presentation',
    'recordNumber',
    'manufacturer',
    'action',
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('entrou');
    this.productService.getAll().subscribe((product: any) => {
      console.log(product);
      this.product = product;
    });
    this.productService.read().subscribe((product: any) => {
      this.product = product;
      console.log(product);
    });
  }
}
