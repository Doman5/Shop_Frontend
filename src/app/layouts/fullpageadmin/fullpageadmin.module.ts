import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/moduls/admin/admin.component';
import { FullpageadminComponent } from './fullpageadmin.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FullpageadminModule { }
