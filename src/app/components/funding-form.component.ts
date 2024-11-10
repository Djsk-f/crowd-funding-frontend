import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Project } from '../models/project.model';
import { CommonModule } from '@angular/common';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-funding-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: '../../styles/_funding.scss',
  template: `
    @if (project) {
      
      <div class="card">
        <h2>Fund {{ project.title }}</h2>
        <form [formGroup] = 'form'>
          <input
            type="number"
            class="input"
            placeholder="Enter amount"
            formControlName="amount"
            Form
          />

          <div class="red" *ngIf="amountControl.invalid && (amountControl.dirty || amountControl.touched)"> 
          <div class="red" *ngIf="amountControl.errors && amountControl.errors['required']"> Amount is required. </div> 
          <div class="red" *ngIf="amountControl.errors && amountControl.errors['min']"> Amount must be a positive number. </div> </div>

          <button class="button" (click)="submitFunding()">
            Contribute
          </button>
        </form>
    </div>
    }
  `
})
export class FundingFormComponent {
  @Input() project!: Project | null;
  @Output() onSubmit = new EventEmitter<{project: Project, amount: number}>();
  amount: number = 0;

  form!: FormGroup

  constructor( private fundService: FundService){}

  ngOnInit() { 
    this.form = new FormGroup({
       amount: new FormControl(0, [Validators.required, Validators.min(1)]) 
      }); 
    }

    // ---------

    get amountControl() { return this.form.get('amount') as FormControl; }

    // ----------
  
  
    async submitFunding() {

      if (this.project && this.form.valid) { 
        const amount = this.amountControl.value;

        this.project.raised += amount;

        this.onSubmit.emit({ project: this.project, amount });

        try {
          
          await this.fundService.updateProject(this.project.id, { raised: this.project.raised } );
          console.log('enregistrer avec succès');
          alert('Enregister avec succès !!')
          
        } catch (error) {
          console.error('Erreur lors de la mise à jour du projet:', error);
        }
      }
    }
} 

