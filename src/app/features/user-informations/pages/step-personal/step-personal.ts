import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-personal',
  imports: [ReactiveFormsModule],
  templateUrl: './step-personal.html',
})
export class StepPersonal {
  readonly _curriculumFormStore = inject(CurriculumFormStore);
  private readonly _router = inject(Router);

  ngOnInit() {
    console.log('PersonalGroup:', this._curriculumFormStore.personalFormGroup);
  }

  logPersonal() {
    console.log('Personal Value:', this._curriculumFormStore.personalFormGroup.value);
  }

  goToProfissional() {
    this._router.navigate(['/professional']);
  }
}
