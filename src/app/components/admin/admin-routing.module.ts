import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { ClientCrudComponent } from 'src/app/views/client-crud/client-crud.component';
import { ClientCreateComponent } from '../client/client-create/client-create.component';
import { ClientUpdateComponent } from '../client/client-update/client-update.component';
import { ClientDeleteComponent } from '../client/client-delete/client-delete.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'client',
        component: ClientCrudComponent,
      },
      {
        path: 'client/create',
        component: ClientCreateComponent,
      },
      {
        path: 'client/update/:id',
        component: ClientUpdateComponent,
      },
      {
        path: 'client/delete/:id',
        component: ClientDeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
