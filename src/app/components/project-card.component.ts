import { ProgressBarComponent } from './progress-bar.component';
import { ProjectService } from './../services/project.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';
import { FundingFormComponent } from "./funding-form.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProgressBarComponent, FundingFormComponent],
  styleUrl:'../../styles/_card.scss',
  template: `
   
  
   <div class="container">
    
   <app-funding-form
        (onSubmit)="fundProject($event)" 
        [project]="selectedProject"
        >
      </app-funding-form>
      <div class="cardList">

        @for (project of projects; track $index) {

          <div class="card">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <app-progress-bar [raised]="project.raised" [goal]="project.goal" />
            <button (click) = 'selectProject(project)' [style]=" {'margin-top':'10px'} " class="button">
              Fund this project
            </button>
          </div>
        }
      </div>
   </div>
   
  
  `
})
export class ProjectCardComponent {
  @Input() project!: Project | null;
  @Input() projects!: Project[];
  @Output() onFund = new EventEmitter<Project>();


  selectedProject: Project | null = null;

  selectProject(project: Project) {
    this.selectedProject = project;
    console.log(project);
    
  }

  fundProject(event: {project: Project, amount: number}) {
    const projectIndex = this.projects.findIndex(p => p.id === event.project.id);
    if (projectIndex === -1) {
      this.projects[projectIndex] = {
        ...this.projects[projectIndex],
        raised: this.projects[projectIndex].raised + event.amount
      };
      this.selectedProject = null;
    }

  }
}