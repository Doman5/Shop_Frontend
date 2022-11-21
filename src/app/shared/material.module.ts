import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
