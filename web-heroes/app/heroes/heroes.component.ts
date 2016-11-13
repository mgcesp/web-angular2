import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

import { HeroService } from '../services/hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {
	errorMessage: string;
	heroes: Hero[];
	mode = 'Observable';
	
	constructor(private heroService: HeroService) {}

	ngOnInit() {
		
	}
}