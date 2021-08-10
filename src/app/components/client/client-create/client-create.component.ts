import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
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

  constructor(private clientService: ClientService, private addressService: AddressService, private router: Router) {

  }

  ngOnInit(): void {
  }

  getCep(cep: string) {
    let cepOnlyNumber = Number(cep.replace(/[^0-9]/g, ''));
    this.clientService.getCep(cepOnlyNumber).subscribe((resp: any) => {
      this.client.address = resp;
      console.log(resp);
    }
    );
  }

  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.addressService.create(this.address)
      this.clientService.showMessage('Cliente cadastrado!')
      this.router.navigate(['/client'])
    })
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }
}
