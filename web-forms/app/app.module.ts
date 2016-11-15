import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SimpleFormComponent } from './app.simpleform';
import { ComplexFormComponent } from './app.complexform';
import { FormValidationComponent } from './app.formvalidation';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		SimpleFormComponent,
		ComplexFormComponent,
		FormValidationComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {}