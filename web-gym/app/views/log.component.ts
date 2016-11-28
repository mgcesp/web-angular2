import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';
import { LogWeightComponent } from '../views/log-weight.component';
import { LogRepsComponent } from '../views/log-reps.component';

@Component({
	moduleId: module.id,
	selector: 'gym-log',
	template: `
	<h2>{{title}}</h2>
	<nav>
		<a [routerLink]="['/log/weight']">Weight</a>
		<a [routerLink]="['/log/reps']">Reps</a>
	</nav>
	<router-outlet></router-outlet>
	`
})
export class LogComponent implements OnInit {
	activeTask: Task;

	title ='Log';
	constructor() {}

	ngOnInit() {
		
	}
}