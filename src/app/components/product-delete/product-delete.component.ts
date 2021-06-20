import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = new Product();
  private id!: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (getParam) => {
        this.productService.readById(getParam.id).subscribe((product: any) => {
          this.product = product;
        });
        this.id = getParam.id;
      },
      (erro) => {
        console.log('Erro ao pegar ID', erro);
      }
    );
  }

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(
      () => {
        this.productService.showMessage('Produto deletado com sucesso!');
        this.router.navigate(['admin/product']);
      },
      (errow) => {
        this.productService.showMessage(`Erro na solicitação: ${errow}`);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['admin/product']);
  }
}
