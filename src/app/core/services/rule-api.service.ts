import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultsRule } from '../../shared/models/rule.model';

@Injectable({
  providedIn: 'root',
})
export class RuleApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getResultsRuleById(ruleId: string): Observable<ResultsRule> {
    return this.http.get<ResultsRule>(`${this.apiUrl}/db/results-rule/${ruleId}`);
  }
  getResultsRulesByRelationID(relationID: string): Observable<ResultsRule[]> {
    return this.http.get<ResultsRule[]>(`${this.apiUrl}/db/results-rule/relation/${relationID}`);
  }
  createResultsRule(rule: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/db/results-rule`, rule);
  }
}
