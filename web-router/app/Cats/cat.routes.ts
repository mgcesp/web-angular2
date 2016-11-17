import { Routes } from '@angular/router';
import { CatListComponent } from '../cats/cat-list.component';
import { CatDetailsComponent } from '../cats/cat-details.component';

export const catRoutes: Routes = [
	{ path: 'cats', component: CatListComponent },
 	{ path: 'cats/:id', component: CatDetailsComponent }
];