import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from '../pet';

@Component({
	moduleId: module.id,
	template: `
	<h2>Dogs</h2>
	<p>List of dogs</p>
	<ul>
		<li *ngFor="let dog of dogs | async">
			<a [routerLink]="['/dogs', dog.id.$t]">{{dog.name.$t}}</a>
		</li>
	</ul>
	`
})
export class DogListComponent implements OnInit {

	dogs: Observable<string[]>;

	constructor(private petService: PetService) {}

	ngOnInit() {
		this.dogs = this.petService.findPets('dog');
		console.log(this.dogs);
	}
}