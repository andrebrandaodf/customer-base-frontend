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
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { VideoCrudComponent } from 'src/app/views/video-crud/video-crud.component';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { FooterComponent } from '../template/footer/footer.component';
import { HeaderComponent } from '../template/header/header.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { EditorModule } from '@tinymce/tinymce-angular';
import { HomeComponent } from 'src/app/views/home/home.component';

import { BlogCrudComponent } from 'src/app/views/blog-crud/blog-crud.component';
import { ProductCreateComponent } from '../products/product-create/product-create.component';
import { ProductDeleteComponent } from '../products/product-delete/product-delete.component';
import { ProductReadComponent } from '../products/product-read/product-read.component';
import { ProductUpdateComponent } from '../products/product-update/product-update.component';
import { BlogDeleteComponent } from '../blog/blog-delete/blog-delete.component';
import { BlogReadComponent } from '../blog/blog-read/blog-read.component';
import { BlogUpdateComponent } from '../blog/blog-update/blog-update.component';
import { BlogCreateComponent } from '../blog/blog-create/blog-create.component';
import { VideoCreateComponent } from '../video/video-create/video-create.component';
import { VideoDeleteComponent } from '../video/video-delete/video-delete.component';
import { VideoReadComponent } from '../video/video-read/video-read.component';
import { VideoUpdateComponent } from '../video/video-update/video-update.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductCrudComponent,
    VideoCreateComponent,
    VideoDeleteComponent,
    VideoReadComponent,
    VideoUpdateComponent,
    VideoCrudComponent,
    BlogCreateComponent,
    BlogDeleteComponent,
    BlogReadComponent,
    BlogUpdateComponent,
    BlogCrudComponent,

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
    MatIconModule,
    ReactiveFormsModule,
    EditorModule,
    NgxMatFileInputModule
  ],
  providers: [MatSidenavContainer],
})
export class AdminModule { }
