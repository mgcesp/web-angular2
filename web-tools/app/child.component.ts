import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-child',
	template: `
		<h2>Child Component</h2>
		<input type="text"/>
		<p>The parent value is {{parentValue}}</p>
	`,
	inputs: ['parentValue']
})
export class ChildComponent implements OnInit {
	parentValue: string;
	constructor() {}

	ngOnInit() {
		
	}
}