import { Component, EventEmitter, Input, Output, CommonModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-funding-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="project">
      <h2>Fund {{ project.tite }}</h2>
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
  @Input() project: Project = null;
  @Output() onSubmit = new EventEmitter<{project: Project, amount: number}>();
  amount: number = 0;

  submitFunding() {
    if (this.project) {
      this.onSubmit.emit();
    }
  }
}