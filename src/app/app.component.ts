import { Project } from './models/project.model';
import { Component } from '@angular/core';
import { FundingFormComponent } from "./components/funding-form.component";
import { ProjectCardComponent } from "./components/project-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <h1>Crowdfunding Projects</h1>

      <app-funding-form
        (onSubmit)="fundProject($event)">
      </app-funding-form>

      <div class="projects">
        <app-project-card *ngFor="let project of projects">
        </app-project-card>
      </div>
    </div>
  `,
  imports: [FundingFormComponent, ProjectCardComponent]
})
export class AppComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Eco-Friendly Water Bottle',
      description: 'A sustainable water bottle made from recycled materials.',
      goal: 10000,
      raised: 4500
    },
    {
      id: 2,
      title: 'Community Garden',
      description: 'Creating a sustainable garden for the local community.',
      goal: 5000,
      raised: 1750
    },
    {
      id: 3,
      title: 'Educational App',
      description: 'An app to help children learn programming basics.',
      goal: 15000,
      raised: 9000
    }
  ];

  selectedProject: Project | null = null;

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  fundProject(event: {project: Project, amount: number}) {
    const projectIndex = this.projects.findIndex(p => p.id === event.project.id);
    if (projectIndex === -1) {
      this.projects[projectIndex] = {
        ...this.projects[projectIndex],
        raised: this.projects[projectIndex].raised? + event.amount : undefined
      };
      this.selectedProject = null;
    }
  }
}