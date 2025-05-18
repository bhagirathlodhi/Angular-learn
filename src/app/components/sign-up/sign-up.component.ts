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

  onUserSave(){
    const formValue = this.userForm.value;
    debugger;
  }
}
