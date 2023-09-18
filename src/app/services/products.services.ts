import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType, ProductWithType } from '../entites/entites';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.http.get(this.baseUrl+'/products');
  }
  getProductById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/products/${id}`)
  }
  createProduct(product: ProductWithType): Observable<any> {
    return this.http.post(this.baseUrl+'/products', product);
  }

  updateProduct(id: number, product: ProductWithType): Observable<any> {
    return this.http.put(`${this.baseUrl+'/products'}/${id}`, product);
  }

  getAllType(): Observable<any> {
    return this.http.get(this.baseUrl+'/productType');
  }

  createType(productType: ProductType): Observable<any> {
    return this.http.post(this.baseUrl+'/productType', productType);
  }
}
