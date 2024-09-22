import { Route } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// Define routes
export const appRoutes: Route[] = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/signin' }, // Wildcard route for unknown paths
];
