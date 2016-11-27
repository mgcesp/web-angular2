import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>Gymmie</h1>
		<nav>
			<a [routerLink]="['/history']">History</a>
			<a [routerLink]="['/log']">Log</a>
			<a [routerLink]="['/journal']">Journal</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {}