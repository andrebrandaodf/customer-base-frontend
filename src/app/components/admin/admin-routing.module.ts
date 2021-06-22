import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { ProductUpdateComponent } from '../products/product-update/product-update.component';
import { ProductDeleteComponent } from '../products/product-delete/product-delete.component';
import { MediaVideoCrudComponent } from 'src/app/views/media-video-crud/media-video-crud.component';
import { MediaVideoUpdateComponent } from '../media/media-video-update/media-video-update.component';
import { MediaVideoDeleteComponent } from '../media/media-video-delete/media-video-delete.component';
import { BlogCrudComponent } from 'src/app/views/blog-crud/blog-crud.component';
import { BlogUpdateComponent } from '../blog/blog-update/blog-update.component';
import { BlogDeleteComponent } from '../blog/blog-delete/blog-delete.component';
import { ProductCreateComponent } from '../products/product-create/product-create.component';
import { MediaVideoCreateComponent } from '../media/media-video-create/media-video-create.component';
import { BlogCreateComponent } from '../blog/blog-create/blog-create.component';


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
        component: ProductCreateComponent,
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
        path: 'media',
        component: MediaVideoCrudComponent,
      },
      {
        path: 'media/create',
        component: MediaVideoCreateComponent,
      },
      {
        path: 'media/update/:id',
        component: MediaVideoUpdateComponent,
      },
      {
        path: 'media/delete/:id',
        component: MediaVideoDeleteComponent,
      },
      {
        path: 'blog',
        component: BlogCrudComponent,
      },
      {
        path: 'blog/create',
        component: BlogCreateComponent,
      },
      {
        path: 'blog/update/:id',
        component: BlogUpdateComponent,
      },
      {
        path: 'blog/delete/:id',
        component: BlogDeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
