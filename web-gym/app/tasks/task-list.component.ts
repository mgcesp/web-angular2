import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from './task';

@Component({
	moduleId: module.id,
	selector: 'task-list',
	template: `
		<ul>
			<li *ngFor="let task of tasks">
				{{task.name}}
				<button (click)=select(task)>SELECT</button>
			</li>
		</ul>
	`
})
export class TaskListComponent implements OnInit {

	constructor(private ts: TasksService) {}

	activeTask: Task;
	tasks: Task[] = this.ts.tasks;

	ngOnInit() {
		this.activeTask = new Task('bench press', 5);
		// this.activeTask = null;
	}

	select(task: Task) {
		this.activeTask = task;
	}
}