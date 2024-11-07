import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { JsonPipe, NgIf } from '@angular/common';

// (6) Ein benutzerdefinierter Validator als Factory
function minLengthValidator(minLength: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value.length < minLength) {
      return { minLength: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-kapitel-11-formularvalidierung',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './kapitel-11-formularvalidierung.component.html',
})
export class Kapitel11FormularvalidierungComponent {
  // (1) Formulargruppe mit verschiedenen Validatoren
  form = new FormGroup({
    name: new FormControl('', [Validators.required, minLengthValidator(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
  });

  // (3) Typprüfung von Controls
  isControl(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control instanceof FormControl;
  }

  // (5) Ein asynchroner Validator, der ein Observable zurückgibt
  asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value === 'invalid' ? { asyncInvalid: true } : null);
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.form.reset();
  }

  get formStatus(): string {
    return this.form.status;
  }
}
