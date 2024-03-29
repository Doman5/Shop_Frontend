import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormRecord, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CartSummary } from '../common/model/cartSummary';
import { InitData } from './model/initData';
import { OrderDto } from './model/orderDto';
import { OrderSummary } from './model/orderSummary';
import { OrderService } from './order.service';
import { CartIconService } from '../common/service/cart-icon.service';
import { JwtService } from '../common/service/jwt.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  formGroup!: FormGroup;
  cartSummary!: CartSummary;
  orderSummary!: OrderSummary;
  initData!: InitData;
  errorMessage!: boolean;
  isLoggedIn = false;

  private statuses = new Map<string, string>([
    ["NEW", "Nowe"],
  ])

  constructor(
    private cookieService: CookieService,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private cartIconService: CartIconService,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
    this.checkCartEmpty();
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street:  ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      shipment: ['', Validators.required],
      payment: ['', Validators.required],
    });
    this.getInitData();
    this.isLoggedIn = this.jwtService.isLoggedIn();
  }

  submit() {
    if(this.formGroup.valid) {
      this.orderService.placeOrder({
        firstname: this.formGroup.get("firstname")?.value,
        lastname: this.formGroup.get("lastname")?.value,
        street: this.formGroup.get("street")?.value,
        zipcode: this.formGroup.get("zipcode")?.value,
        city: this.formGroup.get("city")?.value,
        email: this.formGroup.get("email")?.value,
        phone: this.formGroup.get("phone")?.value,
        cartId: Number(this.cookieService.get("cartId")),
        shipmentId: Number(this.formGroup.get("shipment")?.value.id),
        paymentId: Number(this.formGroup.get("payment")?.value.id)
      } as OrderDto)
      .subscribe({
        next: orderSummary => {
          this.cartIconService.cartChanged(0);
        this.orderSummary = orderSummary;
        this.cookieService.delete("cartId");
        this.errorMessage = false
      },
      error: err => this.errorMessage = true
      })
    }
  }

  getInitData() {
    this.orderService.getInitData()
      .subscribe(initData => {
        this.initData = initData;
        this.setDefaulShipment();
        this.setDefaultPayment();
      })
  }
  setDefaultPayment() {
    this.formGroup.patchValue({"payment": this.initData.payments
    .filter(payment => payment.defaultPayment === true)[0]
  });
  }

  setDefaulShipment() {
    this.formGroup.patchValue({"shipment": this.initData.shipments
      .filter(shipment => shipment.defaultShipment === true)[0]
    });
  }

  getStatus(status: string) {
    return this.statuses.get(status);
  }

  checkCartEmpty() {
    let cartId = Number(this.cookieService.get("cartId"));
    this.orderService.getCart(cartId)
      .subscribe(summary => this.cartSummary = summary)
  }

  get firstname() {
    return this.formGroup.get("firstname");
  }

  get lastname() {
    return this.formGroup.get("lastname");
  }

  get street() {
    return this.formGroup.get("street");
  }

  get zipcode() {
    return this.formGroup.get("zipcode");
  }

  get city() {
    return this.formGroup.get("city");
  }

  get email() {
    return this.formGroup.get("email");
  }

  get phone() {
    return this.formGroup.get("phone");
  }

  get shipment() {
    return this.formGroup.get("shipment")
  }

}


