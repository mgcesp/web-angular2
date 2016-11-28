import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

	tasks = [
		{ name: 'pushups', reps: 3 },
		{ name: 'situps', reps: 4 },
		{ name: 'squats', reps: 5 },
	];
	
	constructor() {}
}