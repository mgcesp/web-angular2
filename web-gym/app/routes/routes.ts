import { ModuleWithProviders, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from '../views/log.component';
import { LogWeightComponent } from '../views/log-weight.component';
import { LogRepsComponent } from '../views/log-reps.component';
import { JournalComponent } from '../views/journal.component';
import { HistoryComponent } from '../views/history.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'log', pathMatch: 'full' },
	{ path: 'history', component: HistoryComponent },
	{ path: 'log', component: LogComponent, 
		children: [
			{ path: '', redirectTo: 'reps', pathMatch: 'full' },
			{ path: 'weight', component: LogWeightComponent },
			{ path: 'reps', component: LogRepsComponent },
		]},
	{ path: 'journal', component: JournalComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);