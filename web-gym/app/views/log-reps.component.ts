import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../tasks/task';

@Component({
	moduleId: module.id,
	selector: 'log-reps',
	template:`
	<h2>Log Reps</h2>
	<h1>{{repCount}}</h1>
	<button (click)="addRep()">Add</button>
	<button (click)="subtractRep()">Subtract</button>
	<button (click)="setReps(Task)">SUBMIT</button>
	`
})
export class LogRepsComponent implements OnInit {
	activeTask: Task;
	repCount: number;

	constructor() {
		this.repCount = 0;
	}

	ngOnInit() {}

	addRep() {
		this.repCount++;
		console.log(this.repCount);
	}
	subtractRep() {
		this.repCount--;
		console.log(this.repCount);
	}
	setReps(task: Task) {
		task.reps = this.repCount;
	}
}