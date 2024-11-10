import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private apiUrl = "http://localhost:3000/api/v1/projects/";

  constructor(private httpClient: HttpClient) {}

  updateProject(id: string, updates: Partial<Project>): Observable<Project> {
    return this.httpClient.patch<Project>(`${this.apiUrl}${id}`, updates);
  }
}
