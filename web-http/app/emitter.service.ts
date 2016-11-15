import { Injectable, EventEmitter } from '@angular/core';
// This class registers events in a _emitters object and
// emits them when they are called using the get() method
@Injectable()
export class EmitterService {
	// Event store
	private static _emitters: {[ID: string]: EventEmitter<any>} = {};
	// Set a new event in the store with a given ID as key
	static get(ID:string):EventEmitter<any> {
		if (!this._emitters[ID])
			this._emitters[ID] = new EventEmitter();
		
		return this._emitters[ID];
	}
}