import { Project } from './models/project.model';
import { Component, OnInit } from '@angular/core';
import { FundingFormComponent } from "./components/funding-form.component";
import { ProjectCardComponent } from "./components/project-card.component";
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './../styles/_app.scss',
  template: `
    <div class="container">
      <h1>Crowdfunding Projects</h1>

      <app-funding-form
        (onSubmit)="fundProject($event)">
      </app-funding-form>

      <div class="projects">
        <app-project-card [projects] = "projects" />
      </div>
    </div>
  `,
  imports: [FundingFormComponent, ProjectCardComponent]
})
export class AppComponent implements OnInit{

  projects!: Project[]
 
  constructor(private serviceProject: ProjectService){}

  async ngOnInit() {
       this.projects = await this.getProject()
  }


  async getProject(): Promise<Project[]>{

    console.log(await this.serviceProject.getProject());
    return await this.serviceProject.getProject()
   
    
  }

  selectedProject: Project | null = null;

  selectProject(project: Project) {
    this.selectedProject = project;
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