import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from 'src/app/views/home/home.component';


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
