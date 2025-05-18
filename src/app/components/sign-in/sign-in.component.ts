import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

 loginForm = new FormGroup({
    eMail: new FormControl('', [Validators.required, Validators.email]),
    uPassword: new FormControl('', Validators.required)
  });

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const formVal = this.loginForm.value;

    const foundUser = users.find((user: any) =>
      user.eMail === formVal.eMail && user.uPassword === formVal.uPassword
    );

    if (foundUser) {
      alert("Login successful!");
      // Navigate or do something
    } else {
      alert("Invalid email or password.");
    }
  }
}
