import { Product } from './../models/product.model';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product[] = [];
  displayedColumns = ['id', 'name', 'presentation', 'recordNumber', 'manufacturer', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((product: any) => { console.log(product); this.product = product});
    this.productService.read().subscribe((product: any) => {
      this.product = product;
      console.log(product)
    })
  }

}
