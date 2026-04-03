import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LogIn } from './pages/log-in/log-in';
import { PersonalizeFeed } from './pages/personalize-feed/personalize-feed';

export const routes: Routes = [

  {
    path: '',
    component:MainPage
  },
  {
    path: 'logIn',
    component: LogIn
  },
  {
    path: 'personalize-feed',
    component: PersonalizeFeed
  }

];
