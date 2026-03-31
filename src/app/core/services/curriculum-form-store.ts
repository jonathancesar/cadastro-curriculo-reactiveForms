import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CurriculumFormStore {
  private readonly curriculumForm = new FormGroup({
    personal: new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      age: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      maritalStatus: new FormControl('', [Validators.required]),
    }),
  });

  get personalFormGroup() {
    return this.curriculumForm.get('personal') as FormGroup;
  }
}
