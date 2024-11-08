import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <button class="button">
        Fund this project
      </button>
    </div>
  `
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Output() onFund = new EventEmitter<Project>();
}