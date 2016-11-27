import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'gym-history',
	template: `
	<h2>{{title}}</h2>
	`
})
export class HistoryComponent implements OnInit {
	title = 'History';
	constructor() {}

	ngOnInit() {
		
	}
}