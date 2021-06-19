import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { ProductComponent } from '../product/product.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { MediaVideoCrudComponent } from 'src/app/views/media-video-crud/media-video-crud.component';
import { MediaVideoComponent } from '../media-video/media-video.component';
import { MediaVideoUpdateComponent } from '../media-video-update/media-video-update.component';
import { MediaVideoDeleteComponent } from '../media-video-delete/media-video-delete.component';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
         {
            path:"products",
            component: ProductCrudComponent
          },
          {
            path:"products/create",
            component: ProductComponent
          },
          {
            path:"products/update/:id",
            component: ProductUpdateComponent
          },
          {
            path:"products/delete/:id",
            component: ProductDeleteComponent
          },
          {
            path:"medias",
            component: MediaVideoCrudComponent
          },
          {
            path:"medias/create",
            component: MediaVideoComponent
          }, 
          {
            path:"medias/update/:id",
            component: MediaVideoUpdateComponent
          },
          {
            path:"medias/delete/:id",
            component: MediaVideoDeleteComponent
          }, 
    ]
  },
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);

