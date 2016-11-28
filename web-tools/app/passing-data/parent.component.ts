import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
	selector: 'parent',
	template: `
	<h2>Parent Component</h2>
	<input type="text" #parentInput (keyup)="0"/>
	<h3>Child Data: {{childData}}</h3>
	<child
		[outgoingData]="parentInput.value"
		(childChanged)="childData=$event">
	</child>
	`
})
export class ParentComponent {
	childData: string;
}