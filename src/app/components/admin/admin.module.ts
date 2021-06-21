import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MediaVideoCrudComponent } from 'src/app/views/media-video-crud/media-video-crud.component';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { BlogComponent } from '../blog/blog.component';
import { MediaVideoDeleteComponent } from '../media-video-delete/media-video-delete.component';
import { MediaVideoReadComponent } from '../media-video-read/media-video-read.component';
import { MediaVideoUpdateComponent } from '../media-video-update/media-video-update.component';
import { MediaVideoComponent } from '../media-video/media-video.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductReadComponent } from '../product-read/product-read.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductComponent } from '../product/product.component';
import { FooterComponent } from '../template/footer/footer.component';
import { HeaderComponent } from '../template/header/header.component';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDeleteComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductCrudComponent,
    MediaVideoComponent,
    MediaVideoDeleteComponent,
    MediaVideoReadComponent,
    MediaVideoUpdateComponent,
    MediaVideoCrudComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [MatSidenavContainer],
})
export class AdminModule {}
