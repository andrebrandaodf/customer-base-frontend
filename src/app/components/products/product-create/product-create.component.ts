import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductForm } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MaxSizeValidator } from '@angular-material-components/file-input';


@Component({
  selector: 'app-product',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: ProductForm = new ProductForm();

  public files: any;
  maxSize = 16;
  fileControl!: FormControl;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) {
    this.fileControl = new FormControl(this.files, [
      Validators.required,
      MaxSizeValidator(this.maxSize * 1024)
    ])
  }

  ngOnInit() {
    this.fileControl.valueChanges.subscribe((files: any) => {
      if (!Array.isArray(files)) {
        this.files = [files];
      } else {
        this.files = files;
      }
    })
  }

  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    presentation: [null, [Validators.required]],
    manufacturer: [null, [Validators.required]],
    recordNumber: [null, [Validators.required]],
    bullProfessionalHealth: [null, [Validators.required]],
    bullPatient: [null, [Validators.required]],
    tokenTechniqueProduct: [null, [Validators.required]],
  })

  // addFileTokenTechniqueProduct(ev: any) {
  //   console.log(ev.target.files)
  //   this.product.tokenTechniqueProduct = ev.target.files[0];
  // }
  // addFileBullPatient(ev: any) {
  //   console.log(ev.target.files)
  //   this.product.bullPatient = ev.target.files[0];
  // }
  // addFileBullProfessionalHealth(ev: any) {
  //   console.log(ev.target.files)
  //   this.product.bullProfessionalHealth = ev.target.files[0];
  // }


  createProduct(): void {

    const formData = new FormData();
    console.log(formData)
    formData.append('name', this.form.value.name);
    formData.append('presentation', this.form.value.presentation);
    formData.append('manufacturer', this.form.value.manufacturer);
    formData.append('recordNumber', this.form.value.recordNumber);

    console.log(this.form)
    formData.append('bullProfessionalHealth', this.form.value.bullProfessionalHealth, this.form.value.bullProfessionalHealth.name);
    formData.append('bullPatient', this.form.value.bullPatient, this.form.value.bullPatient.name);
    formData.append('tokenTechniqueProduct', this.form.value.tokenTechniqueProduct, this.form.value.tokenTechniqueProduct.name);

    this.productService.create(formData).subscribe(() => {
      this.productService.showMessage('Produto cadastrado!');
      this.router.navigate(['admin/product']);
    });
  }

  cancel(): void {
    this.router.navigate(['admin/product']);
  }
}
