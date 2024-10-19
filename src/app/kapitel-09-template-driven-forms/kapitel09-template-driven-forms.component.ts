import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-kapitel-09-template-driven-forms',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './kapitel09-template-driven-forms.component.html',
  styleUrl: './kapitel09-template-driven-forms.component.css',
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
    this.form.reset();
  }
}
