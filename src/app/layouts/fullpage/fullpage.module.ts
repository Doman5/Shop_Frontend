import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageComponent } from './fullpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FullpageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class FullpageModule { }
