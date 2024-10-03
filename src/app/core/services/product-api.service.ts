import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Integration } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/db/products`);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/db/product/${productId}`);
  }

  getProductIntegrations(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/db/product/${productId}/integrations`);
  }

  getProductTestResults(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/report/results/${productId}`);
  }

  createIntegration(integration: { productID1: string; productID2: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/db/integration`, integration);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/db/product`, product);
  }

  searchProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/db/products?name=${name}`);
  }
}
