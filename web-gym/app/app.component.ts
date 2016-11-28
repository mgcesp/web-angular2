import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<nav>
			<a [routerLink]="['/history']" [routerLinkActive]="['is-active']">History</a>
			<a [routerLink]="['/log']" [routerLinkActive]="['is-active']">Log</a>
			<a [routerLink]="['/journal']" [routerLinkActive]="['is-active']">Journal</a>
		</nav>
		
		<div class="app">
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ['app/app.component.css'],
})
export class AppComponent {

}