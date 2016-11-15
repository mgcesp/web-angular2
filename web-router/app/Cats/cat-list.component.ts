import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	template: `
	<h2>Cats</h2>
	<p>List of cats</p>
	`
})
export class CatListComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		
	}
}