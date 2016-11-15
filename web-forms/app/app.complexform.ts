import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'complex-form',
	templateUrl: 'app.complexform.html'
})
export class ComplexFormComponent implements OnInit {

	complexForm: FormGroup;

	constructor(fb: FormBuilder) {
		this.complexForm = fb.group({
			'firstName' : '',
			'lastName' : '',
			'gender': 'Female'
		})
	}

	submitForm(value: any):void {
		console.log('Reactive Form Data: ')
		console.log(value);
	}

	ngOnInit() {
		
	}
}