import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { dogRoutes } from './dogs/dog.routes';
import { catRoutes } from './cats/cat.routes';

export const routes: Routes = [
	{ path: '', redirectTo: '/dogs', pathMatch: 'full' },
	...dogRoutes,
	...catRoutes,
	{ path: '**', redirectTo: '/dogs', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);