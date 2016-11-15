import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'simple-form',
	templateUrl: 'app.simpleform.html'
})
export class SimpleFormComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	submitForm(form: any):void {
		console.log('Form Data: ');
		console.log(form);
	}

}