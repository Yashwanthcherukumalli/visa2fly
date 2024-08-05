import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsletterForm: FormGroup;
  existingEmails: Set<string> = new Set(['test@example.com', 'hello@domain.com']); // Example existing emails

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.newsletterForm.get('email');
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      const emailValue = this.newsletterForm.value.email;

      if (this.existingEmails.has(emailValue)) {
        alert('This email is already subscribed.');
      } else {
        // Handle form submission, such as adding the email to the existing list
        this.existingEmails.add(emailValue);
        console.log('Form Submitted', this.newsletterForm.value);
        alert('Subscription successful!');
      }
    } else {
      if (this.email?.errors?.['required']) {
        alert('Email is required.');
      } else if (this.email?.errors?.['email']) {
        alert('Invalid email address.');
      }
    }
  }
}
