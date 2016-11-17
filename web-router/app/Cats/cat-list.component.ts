import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../pet';

@Component({
	moduleId: module.id,
	template: `
	<h2>Cats</h2>
	<p>List of cats</p>
	<ul>
		<li *ngFor="let cat of cats | async">
			<a [routerLink]="['/cats', cat.id.$t]">{{cat.name.$t}}</a>
		</li>
	</ul>
	`
})
export class CatListComponent implements OnInit {

	cats: Observable<string[]>;

	constructor(private petService: PetService) {}

	ngOnInit() {
		this.cats = this.petService.findPets('cat');
	}
}