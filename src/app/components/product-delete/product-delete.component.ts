import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;
  private id!: number;
  
  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.productService.readById(getParam.id).subscribe((product: any) =>{
        this.product = product;
      });
      this.id = getParam.id;
    }, erro =>{
      console.log('Erro ao pegar ID', erro)
    })
  }

  deleteProduct(): void{
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/products'])
    }, errow =>{
      this.productService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }
}
