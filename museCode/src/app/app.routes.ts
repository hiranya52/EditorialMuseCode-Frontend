import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LogIn } from './pages/log-in/log-in';
import { PersonalizeFeed } from './pages/personalize-feed/personalize-feed';
import { LandingPage } from './pages/landing-page/landing-page';
import { SignUp } from './pages/sign-up/sign-up';
import { WritePage } from './pages/write-page/write-page';
import { Feed } from './components/feed/feed';
import { UserProfile } from './components/user-profile/user-profile';
import { EditProfile } from './components/edit-profile/edit-profile';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingPage
  // },
  // {
  //   path: 'auth/login',
  //   component: LogIn
  // },
  // {
  //   path: 'onboarding/personalize-feed',
  //   component: PersonalizeFeed
  // },
  // {
  //   path: 'app/home',
  //   component: MainPage
  // },
  // {
  //   path: 'signUp',
  //   component: SignUp
  // },
  // {
  //   path: 'new-story',
  //   component: WritePage
  // }

  // 🌍 Public Pages
  {
    path: '',
    component: LandingPage
  },
  { path: 'auth/login',
    component: LogIn
  },
  {
    path: 'signUp',
    component: SignUp
  },
  {
    path: 'editProfile',
    component: EditProfile
  },
  // ⚙️ App Layout (Protected Area)
  {
    path: 'app',
    component: MainPage,
    children: [
      { path: 'home', component: Feed },
    { path: 'profile', component: UserProfile },
    { path: 'new-story', component: WritePage },
    ],
  },
];
