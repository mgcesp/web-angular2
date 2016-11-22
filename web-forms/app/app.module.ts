import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SimpleFormComponent } from './simple-form/app.simpleform';
import { ComplexFormComponent } from './complex-form/app.complexform';
import { FormValidationComponent } from './form-validation/app.formvalidation';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

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
		ModelDrivenComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}