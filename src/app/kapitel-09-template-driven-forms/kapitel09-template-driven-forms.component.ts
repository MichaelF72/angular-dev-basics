import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-kapitel-09-template-driven-forms',
  standalone: true,
  templateUrl: './kapitel09-template-driven-forms.component.html',
  styleUrls: ['./kapitel09-template-driven-forms.component.css'],
  imports: [FormsModule, NgIf],
})
export class Kapitel09TemplateDrivenFormsComponent {
  @ViewChild('myForm') form!: NgForm; // (8) Zugriff auf die Elementreferenz des Formulars
  user = {
    name: '',
    email: '',
    age: null,
  };

  // (4) Methode, die beim Abschicken des Formulars aufgerufen wird
  submitForm() {
    console.log('Form submitted:', this.user);
  }

  // Formular zurücksetzen
  resetForm() {
    if (this.form) {
      this.form.reset(); // Sicherstellen, dass form nicht undefined ist
    } else {
      console.warn('Form is not available');
    }
  }
}
