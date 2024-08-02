import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Integration } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8081/db';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductIntegrations(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product/${productId}/integrations`);
  }

  createIntegration(integration: { productID1: string; productID2: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/integration`, integration);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/product`, product);
  }

  searchProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?name=${name}`);
  }
}
