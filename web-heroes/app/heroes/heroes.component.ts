import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
	selector: 'my-heroes',
	template: `
	<h1>{{title}}</h1>
	<ul>
		<li *ngFor="let hero of heroes">
			<p>{{hero.name}}</p>
			<p>{{hero.alias}}</p>
		</li>
	</ul>
	`
})
export class HeroesComponent implements OnInit {
	title = "Dev Heroes";

	heroes = [
		{name: 'Manolo', alias: 'mcfresh'},
		{name: 'Andrew', alias: 'sleepy'},
		{name: 'Luis', alias: 'back2back'}
	];

	constructor() {}

	ngOnInit() {
		
	}
}