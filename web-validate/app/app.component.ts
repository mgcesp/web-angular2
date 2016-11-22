import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
	public user: User;

	ngOnInit() {
		this.user = {
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	save(model: User, isValid: boolean) {
		console.log(model, isValid);
	}
}