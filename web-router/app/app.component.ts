import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
	<div>
		<nav>
			<a [routerLink]="['/']">Home</a>
			<a [routerLink]="['/dogs']">Dogs</a>
			<a [routerLink]="['/cats']">Cats</a>
		</nav>
	</div>
	<router-outlet></router-outlet>
	`
})
export class AppComponent {}