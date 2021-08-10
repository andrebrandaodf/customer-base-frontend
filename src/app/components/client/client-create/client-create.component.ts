import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import { ClientService } from 'src/app/services/client.service';
import { Client } from '../../../models/client.model';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'app-client',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
})
export class ClientCreateComponent implements OnInit {

  address!: Address;
  client: Client = {
    name: '',
    cpf: '',
    address: {
      cep: '',
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      complemento: ''
    },
    phone: '',
    email: ''
  }


  public files: any;
  maxSize = 16;
  fileControl!: FormControl;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private addressService: AddressService, private router: Router) {
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
    cpf: [null, [Validators.required]],
    address: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    email: [null, [Validators.required]]
  })

  createClient(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    console.log(formData)
    formData.append('name', this.form.value.name);
    formData.append('cpf', this.form.value.cpf);
    formData.append('address', this.form.value.address);
    formData.append('phone', this.form.value.phone);
    formData.append('email', this.form.value.phone);

    this.clientService.create(formData).subscribe(() => {
      this.clientService.showMessage('Cliente cadastrado!');
      this.router.navigate(['admin/client']);
    });
  }

  getCep(cep: string) {
    let cepOnlyNumber = Number(cep.replace(/[^0-9]/g, ''));
    this.clientService.getCep(cepOnlyNumber).subscribe((resp: any) => {
      this.client.address = resp;
      console.log(resp);
    }
    );
  }

  // createClient(): void {
  //   this.clientService.create(this.client).subscribe(() => {
  //     this.addressService.create(this.address)
  //     this.clientService.showMessage('Cliente cadastrado!')
  //     this.router.navigate(['/client'])
  //   })
  // }

  cancel(): void {
    this.router.navigate(['admin/client']);
  }
}
