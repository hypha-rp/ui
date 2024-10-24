import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelationshipApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  createRelationship(relationship: {
    objectID1: string;
    objectID2: string;
    relationshipType: string;
  }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/db/relationship`, relationship);
  }

  getRelationshipById(relationshipId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/db/relationship/${relationshipId}`);
  }

  getRelationshipTestResults(relationshipId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/results/relationship/${relationshipId}`);
  }
}
