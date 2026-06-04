import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { LogIn } from './pages/log-in/log-in';
import { LandingPage } from './pages/landing-page/landing-page';
import { SignUp } from './pages/sign-up/sign-up';
import { WritePage } from './pages/write-page/write-page';
import { Feed } from './components/feed/feed';
import { UserProfile } from './components/user-profile/user-profile';
import { Followers } from './components/followers/followers';
import { ArticleView } from './components/article-view/article-view';
import { PersonalizeFeed } from './pages/personalize-feed/personalize-feed';

// export const routes: Routes = [

  // 🌍 Public Pages
//   {
//     path: '',
//     component: LandingPage
//   },
//   { path: 'auth/login',
//     component: LogIn
//   },
//   {
//     path: 'signUp',
//     component: SignUp
//   },
//   {
//     path: 'new-story',
//     component: WritePage
//   },
//   {
//     path: 'personalize-feed',
//     component: PersonalizeFeed
//   },
//   // ⚙️ App Layout (Protected Area)
//   {
//     path: 'app',
//     component: MainPage,
//     children: [
//       {
//         path: 'home',
//         component: Feed
//       },
//       {
//         path: 'profile',
//         component: UserProfile
//       },
//       {
//         path: 'followers',
//         component: Followers
//       },
//       {
//         path: 'article-view',
//         component: ArticleView
//       }
//     ],
//   },
// ];


export const routes: Routes = [

  // 🌍 Public Pages
  {
    path: '',
    component: LandingPage
  },

  {
    path: 'auth/login',
    component: LogIn
  },

  {
    path: 'signUp',
    component: SignUp
  },

  {
    path: 'new-story',
    component: WritePage
  },

  {
    path: 'personalize-feed',
    component: PersonalizeFeed
  },

  // ⚙️ App Layout
  {
    path: 'app',
    component: MainPage,

    children: [

      // default route
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: Feed
      },

      {
        path: 'profile',
        component: UserProfile
      },

      {
        path: 'followers',
        component: Followers
      },

      {
        path: 'article-view',
        component: ArticleView
      },

      // ✅ Added missing routes
      // {
      //   path: 'library',
      //   component: LibraryComponent
      // },

      {
        path: 'writing',
        component: WritePage
      }

      // {
      //   path: 'stats',
      //   component: StatsComponent
      // }

    ],
  },

  // fallback
  {
    path: '**',
    redirectTo: ''
  }

];
