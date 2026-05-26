import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-professional',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './step-professional.html',
})
export class StepProfessional {
  readonly _curriculumFormStore = inject(CurriculumFormStore);

  addExperience() {
    this._curriculumFormStore.professionalFormArray.push(
      new FormGroup({
        position: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
      }),
    );
  }

  removeExperience(index: number) {
    this._curriculumFormStore.professionalFormArray.removeAt(index);
  }

  submit() {
    console.log(this._curriculumFormStore.professionalFormArray.value);
  }
}
