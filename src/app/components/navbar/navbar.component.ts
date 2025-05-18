import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterLink } from '@angular/router';
import { MatButtonModule} from '@angular/material/button'
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-component',
  imports: [RouterOutlet,MatButtonModule,MatToolbarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
