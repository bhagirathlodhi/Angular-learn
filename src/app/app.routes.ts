import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AllusersComponent } from './components/allusers/allusers.component';

export const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'users', component: AllusersComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];
