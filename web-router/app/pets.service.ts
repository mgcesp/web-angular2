import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class PetService {
	constructor(private jsonp: Jsonp){}

	private apiUrl = 'http://api.petfinder.com/';

	findPets(animal: string) {
		const endPoint = 'pet.find';
		let params = new URLSearchParams();

		params.set('key', '555f8155d42d5c9be4705beaf4cce089');
		params.set('location', 'texas');
		params.set('animal', animal);
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		return this.jsonp
			.get(this.apiUrl + endPoint, { search: params })
			.map(response => <string[]> response.json().petfinder.pets.pet);		
	}

	findPetById(id: string) {
		const endPoint = 'pet.get';
		let params = new URLSearchParams();
		params.set('key', '555f8155d42d5c9be4705beaf4cce089');
		params.set('id', id);
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		return this.jsonp
			.get(this.apiUrl + endPoint, { search: params })
			.map(response => <string[]> response.json().petfinder.pet);
	}
}