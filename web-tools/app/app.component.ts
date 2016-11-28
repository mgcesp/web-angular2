import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>Inputs and Outputs</h1>
	<h2>Parent Component</h2>
	<input type="text" #localVariable (keyup)="0"/>
	<app-child [parentValue]="localVariable.value"></app-child>
	`
})
export class AppComponent {
}