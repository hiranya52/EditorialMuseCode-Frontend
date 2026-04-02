import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LogIn } from './pages/log-in/log-in';

export const routes: Routes = [

  {
    path: '',
    component:MainPage
  },
  {
    path: 'logIn',
    component: LogIn
  }

];
