import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/views/home/home.component';
import { MediaVideoCrudComponent } from 'src/app/views/media-video-crud/media-video-crud.component';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { MediaVideoDeleteComponent } from '../media-video-delete/media-video-delete.component';
import { MediaVideoUpdateComponent } from '../media-video-update/media-video-update.component';
import { MediaVideoComponent } from '../media-video/media-video.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductComponent } from '../product/product.component';
import { AdminComponent } from './admin.component';

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
        path: 'product',
        component: ProductCrudComponent,
      },
      {
        path: 'product/create',
        component: ProductComponent,
      },
      {
        path: 'product/update/:id',
        component: ProductUpdateComponent,
      },
      {
        path: 'product/delete/:id',
        component: ProductDeleteComponent,
      },
      {
        path: 'medias',
        component: MediaVideoCrudComponent,
      },
      {
        path: 'medias/create',
        component: MediaVideoComponent,
      },
      {
        path: 'medias/update/:id',
        component: MediaVideoUpdateComponent,
      },
      {
        path: 'medias/delete/:id',
        component: MediaVideoDeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
