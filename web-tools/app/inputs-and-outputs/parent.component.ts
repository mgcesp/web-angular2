import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
	selector: 'parent-component',
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
export class ParentComponent {
	public childData: string;
}