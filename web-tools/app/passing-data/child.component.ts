import { Component, EventEmitter } from '@angular/core';

@Component({
	selector: 'child',
	template: `
	<h2>Child Component</h2>
	<input type="text" #childInput (keyup)="onChange(childInput.value)"/>
	<h3>Parent data: {{incomingData}}</h3>
	`,
	inputs: ['incomingData:outgoingData'],
	outputs: ['childChanged']
})
export class ChildComponent {
	incomingData: string;
	childChanged = new EventEmitter<string>();

	onChange(value: string) {
		this.childChanged.emit(value);
	}
}