import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { FullpageadminComponent } from './fullpageadmin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminProductComponent } from 'src/app/modules/admin/admin-product/admin-product.component';
import { AdminProductUpdateComponent } from 'src/app/modules/admin/admin-product-update/admin-product-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductFromComponent } from 'src/app/modules/admin/admin-product-form/admin-product-form.component';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';
import { AdminMessageComponent } from 'src/app/modules/admin/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminCategoryComponent } from 'src/app/modules/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from 'src/app/modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from 'src/app/modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryFormComponent } from 'src/app/modules/admin/admin-category/admin-category-form/admin-category-form';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductFromComponent,
    AdminProductAddComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryUpdateComponent,
    AdminCategoryFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FullpageadminModule { }
