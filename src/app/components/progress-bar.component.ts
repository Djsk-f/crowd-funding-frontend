import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProgressPipe } from '../pipes/progress.pipe';

@Component({
  selector: 'app-progress-bar',
  imports: [ProgressPipe],
  standalone: true,
  styleUrl: '../../styles/_progress.scss',
  template: `
    <div class="progress-bar">
      <div [style.width.%]="progress | progres"
        class="progress-bar-fill">
      </div>
    </div>
    <div>
    {{ raised }} raised of {{ goal }} goal ({{ progress }}%)
    </div>
  `
})
export class ProgressBarComponent implements OnChanges {
  @Input() raised = 0;
  @Input() goal = 0;
  progress = 0;
 


  ngOnChanges(changes: SimpleChanges) {
    if (changes['raised'] || changes['goal']) {
      this.calculateProgress();
    }
  }

  calculateProgress() {
    this.progress = this.goal > 0 ? (this.raised / this.goal) * 100 : 0;
  }
}

