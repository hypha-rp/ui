import { StringMappingType } from 'typescript';
import { Relationship } from './relationship.model';

export interface ResultsRule {
  id: string;
  expression: string;
  appliesTo: string[];
  createdAt: string;
  updatedAt: string;
  relationship_id: string;
  relation: Relationship;
}
