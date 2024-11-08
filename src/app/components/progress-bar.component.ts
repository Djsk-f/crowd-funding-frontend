import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `
    <div class="progress-bar">
      <div 
        class="progress-bar-fill">
      </div>
    </div>
    <div>
      {{ raised }} raised of {{ goal }} goal
      ({{ (raised / goal) }}%)
    </div>
    <span> fidele progress-bar </span>
  `
})
export class ProgressBarComponent {
  @Input() raised = 0;
  @Input() goal = 0;
}