import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductForm } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  product: ProductForm = new ProductForm();

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    presentation: [null, [Validators.required]],
    manufacturer: [null, [Validators.required]],
    recordNumber: [null, [Validators.required]],
    bullProfessionalHealth: [null, [Validators.required]],
    bullPatient: [null, [Validators.required]],
    tokenTechiqueProduct: [null, [Validators.required]],
  })

  addFile(ev: any) {
    console.log(ev.target.files)
    this.product.bullProfessionalHealth = ev.target.files[0];
    this.product.bullPatient = ev.target.files[0];
    this.product.tokenTechniqueProduct = ev.target.files[0];
  }


  createProduct(): void {

    const formData = new FormData();
    console.log(formData)
    formData.append('name', this.product.name);
    formData.append('presentation', this.product.presentation);
    formData.append('manufacturer', this.product.manufacturer);
    formData.append('recordNumber', this.product.recordNumber);

    formData.append('bullProfessionalHealth', this.product.bullProfessionalHealth, this.product.bullProfessionalHealth.name);
    formData.append('bullPatient', this.product.bullPatient, this.product.bullPatient.name);
    formData.append('tokenTechniqueProduct', this.product.tokenTechniqueProduct, this.product.tokenTechniqueProduct.name);

    this.productService.create(formData).subscribe(() => {
      this.productService.showMessage('Produto cadastrado!');
      this.router.navigate(['admin/product']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/product']);
  }
}
