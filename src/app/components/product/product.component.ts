import { ProductService } from './../service/product.service';
import { Product } from '../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product ={
    name: '',
    presentation: '',
    recordNumber: '',
    manufacturer: '',
    bullProfessionalHealth: '',
    bullPatient: '',
    tokenTechniqueProduct: ''
  };

  
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto cadastrado!')
      this.router.navigate(['/products'])
    })
  }

  //preciso Limpar o formulário
  cancel(): void{
    this.router.navigate(['/products'])
  }
  
}
