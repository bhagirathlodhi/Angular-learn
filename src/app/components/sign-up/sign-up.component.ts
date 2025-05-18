import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userForm: FormGroup =new FormGroup({
    uName: new FormControl(""),
    eMail: new FormControl(""),
    uPassword: new FormControl(""),
    uRePassword : new FormControl(""),
    isAgree: new FormControl(false)

  })

  onUserSave(): void {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;

      // password check
      if (formValue.uPassword !== formValue.uRePassword) {
        alert("Passwords do not match.");
        return;
      }

      // Simulated JSON DB using localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

      // Check if email already exists
      const userExists = existingUsers.some((user: any) => user.eMail === formValue.eMail);
      if (userExists) {
        alert("Email already registered.");
        return;
      }

      // Save new user
      existingUsers.push(formValue);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert("User registered successfully!");
      this.userForm.reset();
    } else {
      alert("Please fill all required fields correctly.");
    }
  }
}
