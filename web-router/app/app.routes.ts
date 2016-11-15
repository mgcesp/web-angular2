import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/dogs', pathMatch: 'full' },
	{ path: 'cats', component: CatListComponent },
	{ path: 'dogs', component: DogListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);