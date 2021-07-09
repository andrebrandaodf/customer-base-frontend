import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  product: ProductForm = new ProductForm();
  private id?: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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

  updateProduct(): void {
    const formData = new FormData();
    console.log(formData)
    formData.append('id', this.product.id.toString());
    formData.append('name', this.product.name);
    formData.append('presentation', this.product.presentation);
    formData.append('manufacturer', this.product.manufacturer);
    formData.append('recordNumber', this.product.recordNumber);

    console.log(this.product);
    this.productService.update(formData).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['admin/product']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/product']);
  }
}
