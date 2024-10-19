import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-kapitel-10-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './kapitel-10-reactive-forms.component.html',
  styleUrls: ['./kapitel-10-reactive-forms.component.css'],
})
export class Kapitel10ReactiveFormsComponent implements OnInit {
  // (2) Das Formularmodell wird in der Komponente erstellt.
  myForm!: FormGroup;

  ngOnInit(): void {
    // (3) Eine FormGroup ist die Basis, jedes Feld erhält ein FormControl.
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Name ist erforderlich und muss min. 3 Zeichen haben.
      email: new FormControl('', [Validators.required, Validators.email]), // Email muss ein gültiges Format haben.
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(99)]), // Alter muss zwischen 18 und 99 liegen.
    });

    // (11) valueChanges und statusChanges beobachten die Änderungen.
    this.myForm.valueChanges.subscribe(value => {
      console.log('Form Value Changed', value);
    });

    this.myForm.statusChanges.subscribe(status => {
      console.log('Form Status Changed', status);
    });
  }

  // Methode zum Absenden des Formulars
  submitForm(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

  // Formular zurücksetzen
  resetForm(): void {
    this.myForm.reset();
  }
}
