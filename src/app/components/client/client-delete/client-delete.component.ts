import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-clientes-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss']
})
export class ClientesDeleteComponent implements OnInit {

  client!: Client;
  private id!: number;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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

  deleteClient(): void {
    this.clientService.delete(this.id).subscribe(() => {
      this.clientService.showMessage('Clientes deletado com sucesso!');
      this.router.navigate(['/client']);
    }, errow => {
      this.clientService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void {
    this.router.navigate(['/client']);
  }

}
