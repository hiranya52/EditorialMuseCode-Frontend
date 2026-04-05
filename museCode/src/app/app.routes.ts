import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LogIn } from './pages/log-in/log-in';
import { PersonalizeFeed } from './pages/personalize-feed/personalize-feed';
import { LandingPage } from './pages/landing-page/landing-page';
import { SignUp } from './pages/sign-up/sign-up';

export const routes: Routes = [

  {
    path: '',
    component: LandingPage
  },
  {
    path: 'auth/login',
    component: LogIn
  },
  {
    path: 'onboarding/personalize-feed',
    component: PersonalizeFeed
  },
  {
    path: 'app/home',
    component: MainPage
  },
  {
    path: 'signUp',
    component: SignUp
  }

];
