import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { OrderListDto } from './model/orderListDto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<OrderListDto>> {
    return this.http.get<Array<OrderListDto>>("/api/orders");
  }
}
