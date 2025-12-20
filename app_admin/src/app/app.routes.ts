import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';
import { LoginComponent } from './login/login';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: TripListingComponent, canActivate: [AuthGuard] }
];
