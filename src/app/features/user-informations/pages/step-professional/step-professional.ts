import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputValidationDirective } from '../../../../shared/directives/input-validation-directive';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-step-professional',
  imports: [RouterLink, ReactiveFormsModule, InputValidationDirective],
  templateUrl: './step-professional.html',
})
export class StepProfessional {
  readonly _curriculumFormStore = inject(CurriculumFormStore);

  professionalArrayControls = toSignal(
    this._curriculumFormStore.professionalFormArray.valueChanges.pipe(
      map(() => this._curriculumFormStore.professionalFormArray.controls),
    ),
    {
      initialValue: this._curriculumFormStore.professionalFormArray.controls,
    },
  );

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
