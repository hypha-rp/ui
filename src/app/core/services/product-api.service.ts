import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';

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
    return this.http.get<any[]>(`${this.apiUrl}/results/product/${productId}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/db/product`, product);
  }

  searchProducts(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/db/products?name=${name}`);
  }
}
