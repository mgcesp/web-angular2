import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	template: `
	<h2>Dogs</h2>
	<p>List of dogs</p>
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