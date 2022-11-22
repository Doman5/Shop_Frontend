import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './model/category';
import { CategoryProducts } from './model/categoryProducts';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryProducts(slug: string, page: number, pageSize: number): Observable<CategoryProducts> {
    return this.http.get<CategoryProducts>(`/api/categories/${slug}/products?page=${page}&size=${pageSize}`);
  }
}
