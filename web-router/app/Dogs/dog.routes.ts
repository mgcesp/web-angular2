import { Routes } from '@angular/router';
import { DogListComponent } from './dog-list.component';
import { DogDetailsComponent } from './dog-details.component';

export const dogRoutes: Routes = [
  { path: 'dogs', component: DogListComponent },
  { path: 'dogs/:id', component: DogDetailsComponent }
];
