import { HttpClient } from '@angular/common/http';
import { Project } from './../models/project.model';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  GetURL = "http://localhost:3000/api/v1/projects/"

  async getProject(): Promise<Project[]> {

      return await lastValueFrom(this.httpClient.get<Project[]>(this.GetURL)) 
  }
}
