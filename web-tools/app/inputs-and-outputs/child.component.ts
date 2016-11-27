import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'child-component',
	template: `
	<h2>ChildComponent</h2>
	<label>Enter ChildComponent value:</label>
	<input type="text" #childText (keyup)="onChange(childText.value)"/>
	<p>Value from parent component</p>
	{{parentData}}
	`,
	inputs: ['parentData'],
	outputs: ['childEvent']
})
export class ChildComponent implements OnInit {
	public parentData: string;
	public childEvent = new EventEmitter<string>();

	onChange(value: string) {
		this.childEvent.emit(value);
	}

	constructor() {}

	ngOnInit() {
		
	}
}