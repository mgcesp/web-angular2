import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'gym-journal',
	template: `
	<h2>{{title}}</h2>
	`
})
export class JournalComponent implements OnInit {
	title: string;
	
	constructor() {}

	ngOnInit() {
		this.title = 'Journal';
	}
}