import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntegrationApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  createIntegration(integration: { productID1: string; productID2: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/db/integration`, integration);
  }

  getIntegrationById(integrationId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/db/integration/${integrationId}`);
  }

  getIntegrationTestResults(integrationId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/db/results/integration/${integrationId}`);
  }
}
