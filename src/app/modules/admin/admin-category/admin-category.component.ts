import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { AdminCategoryNameDto } from '../common/dto/adminCategoryNameDto';
import { AdminCategoryService } from './admin-category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>
  displayedColumns: string[] = ['id', 'name', 'actions'];
  data: Array<AdminCategoryNameDto> = []
 

  constructor(
    private adminCategoryService: AdminCategoryService,
    private adminConfirmDialogService: AdminConfirmDialogService
    ) { }

  ngOnInit(): void {
      this.getCategories();
  }

  confirmDelete(element: AdminCategoryNameDto) {
    this.adminConfirmDialogService.openConfirmDialog("Czy chcesz usunąć te kategorie?")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.adminCategoryService.delete(element.id)
        .subscribe(() => {
          this.data.forEach((value, index) => {
            if(element == value) {
              this.data.splice(index, 1);
              this.table.renderRows();
            }
          })
        })
      }
    })

  }

  getCategories() {
    return this.adminCategoryService.getCategories()
      .subscribe(categories => this.data = categories);
  }
}
