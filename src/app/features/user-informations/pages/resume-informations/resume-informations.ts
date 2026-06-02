import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store';

@Component({
  selector: 'app-resume-informations',
  imports: [TitleCasePipe],
  templateUrl: './resume-informations.html',
})
export class ResumeInformations {
  private readonly _curriculumFormStore = inject(CurriculumFormStore);
  private readonly _router = inject(Router);

  personalData = this._curriculumFormStore.personalFormGroup.value;
  professionalData = this._curriculumFormStore.professionalFormArray.value;

  newCurriculum() {
    this._curriculumFormStore.curriculumFormGroup.reset();
    this._curriculumFormStore.resetProfessionalFormArray();
    this._router.navigate(['/']);
  }
}
