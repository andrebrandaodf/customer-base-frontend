import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  client!: Client;
  private id?: number;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.clientService.readById(getParam.id).subscribe((client: any) => {
        this.client = client;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
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

  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    cpf: [null, [Validators.required]],
    address: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    email: [null, [Validators.required]]
  })

  updateClient(): void {
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

  cancel(): void {
    this.router.navigate(['/client']);
  }

}
