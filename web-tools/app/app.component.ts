import { Component } from '@angular/core';
import { ChildComponent } from './inputs-and-outputs/child.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>Inputs and Outputs</h1>
	<h2>Parent Component</h2>
	<label>Enter ParentComponent value:</label>
	<input type="text" #ptext (keyup)="0">
	<p>Value from child component</p>
	{{childData}}
	<child-component (childEvent)="childData=$event" [parentData]="ptext.value"></child-component>
	`,
	directives: [ChildComponent]
})
export class AppComponent {
	public childData: string;
}