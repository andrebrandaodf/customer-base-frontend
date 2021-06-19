import { Product } from './../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;
  private id?: number;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute){ 
      
    }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.productService.readById(getParam.id).subscribe((product: any) => {
        this.product = product;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
  }

  updateProduct(): void {
    console.log(this.product);
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    })
  }

  cancel(): void{
    this.router.navigate(["/products"]);
  }

}
