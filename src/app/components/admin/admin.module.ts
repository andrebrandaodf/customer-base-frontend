import { NgModule } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductReadComponent } from '../product-read/product-read.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductCrudComponent } from 'src/app/views/product-crud/product-crud.component';
import { MediaVideoComponent } from '../media-video/media-video.component';
import { MediaVideoDeleteComponent } from '../media-video-delete/media-video-delete.component';
import { MediaVideoReadComponent } from '../media-video-read/media-video-read.component';
import { MediaVideoUpdateComponent } from '../media-video-update/media-video-update.component';
import { MediaVideoCrudComponent } from 'src/app/views/media-video-crud/media-video-crud.component';
import { NavbarComponent } from '../template/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatSidenavModule,
  MatSidenavContainer,
} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FooterComponent } from '../template/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../template/header/header.component';

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
  ],
  providers: [MatSidenavContainer],
})
export class AdminModule {}
