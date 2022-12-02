import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../common/model/page';
import { AdminOrder } from './model/adminOrder';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {
  
  constructor(private http: HttpClient) { }
  
  getOrders(page: number, size: number): Observable<Page<AdminOrder>> {
    return this.http.get<Page<AdminOrder>>(`/api/admin/orders?page=${page}&size=${size}`)
  }
  
  getOrder(id: number): Observable<AdminOrder> {
    return this.http.get<AdminOrder>("/api/admin/orders/" + id);
  }
  
  saveStatus(id: string, value: any):Observable<void> {
    return this.http.patch<void>("/api/admin/orders/" + id, value);
  }
  
  getInitData(): Observable<any> {
    return this.http.get<any>("/api/admin/orders/initData");
  }
}
