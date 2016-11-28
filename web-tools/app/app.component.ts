import { Component } from '@angular/core';
import { ParentComponent } from './passing-data/parent.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>Angular 2 Playground</h1>
	<parent></parent>
	`
})
export class AppComponent {
}