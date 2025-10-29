import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
 contactForm: FormGroup;
  isSubmitted = false;

  email = "gamal49@gmail.com";
  phone1 = "+201113042311";
  phone2 = "";
  linkedin = "https://www.linkedin.com/";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
}
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log("Form Submitted!", this.contactForm.value);

    alert("Message sent successfully! (Check the console for data)");

    this.contactForm.reset();
    this.isSubmitted = false;
  }




}
