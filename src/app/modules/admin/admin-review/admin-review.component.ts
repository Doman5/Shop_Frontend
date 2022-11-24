import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogComponent } from '../common/component/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { AdminReviewService } from './admin-review.service';
import { AdminReview } from './model/AdminReview';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss']
})
export class AdminReviewComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  data: AdminReview[] = [];
  displayedColumns = ["authorName", "content", "moderated", "actions"];

  constructor(
    private adminReviewService: AdminReviewService,
    private dialogeService: AdminConfirmDialogService
    ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.adminReviewService.getReviews()
      .subscribe(reviews => this.data = reviews)
  }

  confirmModerate(element: AdminReview) {
    this.dialogeService.openConfirmDialog('Czy napewno chcesz potwierzdić opnie?')
      .afterClosed()
      .subscribe( result => {
        if(result) {
          this.adminReviewService.moderate(element.id)
            .subscribe(() => this.data.forEach((value, index) => {
              if(element == value) {
                element.moderated = true;
              }
            })
          )};
      });
  }

  confirmDelete(element: AdminReview) {
    this.dialogeService.openConfirmDialog('Czy napewno chcesz usunąć tą opinie?')
      .afterClosed()
      .subscribe(result => {
        if(result) {
          this.adminReviewService.delete(element.id)
            .subscribe(() => {
              this.data.forEach((value, index) => {
                if(element == value) {
                  this.data.splice(index, 1);
                  this.table.renderRows();
                }
              });
            });
        }
      });
  }

}
