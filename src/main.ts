import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter} from '@angular/router'
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
   providers: [
    provideRouter(routes)
  ]
