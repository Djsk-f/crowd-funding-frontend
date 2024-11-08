import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funding-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="project">
      <h2>Fund {{ project.title }}</h2>
      <input
        type="number"
        class="input"
        placeholder="Enter amount"
      />
      <button class="button">
        Contribute
      </button>
    </div>
  `
})
export class FundingFormComponent {
  @Input() project!: Project;
  @Output() onSubmit = new EventEmitter<{project: Project, amount: number}>();
  amount: number = 0;

  submitFunding() {
    if (this.project) {
      this.onSubmit.emit();
    }
  }
}