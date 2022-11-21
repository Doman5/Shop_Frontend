import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCategoryNameDto } from 'src/app/modules/admin/common/dto/adminCategoryNameDto';
import { SidebarCategory } from './model/sidebarCategory';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<SidebarCategory>> {
    return this.http.get<Array<SidebarCategory>>("/api/categories");
  }
}
