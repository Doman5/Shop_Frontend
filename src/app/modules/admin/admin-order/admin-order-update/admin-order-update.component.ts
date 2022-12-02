import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminOrderService } from '../admin-order.service';
import { AdminOrder } from '../model/adminOrder';

@Component({
  selector: 'app-admin-order-update',
  templateUrl: './admin-order-update.component.html',
  styleUrls: ['./admin-order-update.component.scss']
})
export class AdminOrderUpdateComponent implements OnInit {

  order!: AdminOrder;

  constructor(
    private router: ActivatedRoute,
    private adminOrderService: AdminOrderService
  ) { }

  ngOnInit(): void {
    this.getAdminOrder()
      .subscribe(order => this.order = order)
  }

  getAdminOrder() {
    let id = Number(this.router.snapshot.params['id']);
    return this.adminOrderService.getOrder(id);
  }

}
