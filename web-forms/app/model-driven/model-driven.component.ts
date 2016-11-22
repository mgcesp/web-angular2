import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
	moduleId: module.id,
	selector: 'model-driven',
	templateUrl: 'model-driven.component.html'
})
export class ModelDrivenComponent implements OnInit {

	public myForm: FormGroup;

	public PAYMENT_METHOD_TYPE = {
		BANK: 'bank',
		CARD: 'card'
	};

	constructor(private _fb:FormBuilder) {}

	ngOnInit() {
		this.myForm =  this._fb.group({
			name: ['Jane Doe'],
			paymentMethod: this.initPaymentMethodGroup()
		});
		// subscribe to payment method type changes
		this.subscribePaymentTypeChanges();
		// set default to type BANK
		this.setPaymentMethod(this.PAYMENT_METHOD_TYPE.BANK);
	}
	// Initialize payment Group
	initPaymentMethodGroup() {
		const group = this._fb.group({
			type: [''],
			card: this._fb.group(this.initPaymentMethodCardModel()),
			bank: this._fb.group(this.initPaymentMethodBankModel())
		});
		return group;
	}
	// Initialize card model
	initPaymentMethodCardModel() {
		// regex for credit cards
		const cardNoRegex = '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})';
		// regex for expiration format MM/YY
		const expiryRegex = '^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$';

		const model = {
			cardNo: ['', [Validators.required, Validators.pattern(cardNoRegex)]],
			cardHolder: ['', Validators.required],
			expiry: ['', [Validators.required, Validators.pattern(expiryRegex)]]
		}
		return model;
	}
	// Initialize bank model
	initPaymentMethodBankModel() {
		const model = {
			accountNo: ['', Validators.required],
			accountHolder: ['', Validators.required],
			routingNo: ['', Validators.required]
		}
		return model;
	}
	// Set payment method for Form
	setPaymentMethod(type: string) {
		// update payment method type value
		const ctrl: FormControl = (<any>this.myForm).controls.paymentMethod.controls.type;
		ctrl.setValue(type);
	}

	// Conditional validation
	subscribePaymentTypeChanges() {
		// controls
		const pmControl = (<any>this.myForm).controls.paymentMethod;
		const bankControl = pmControl.controls.bank;
		const cardControl = pmControl.controls.card;
		// initialize value changes stream
		const changes$ = pmControl.controls.type.valueChanges;
		// subscribe to the stream
		changes$.subscribe(paymentMethodType => {
			if (paymentMethodType === this.PAYMENT_METHOD_TYPE.BANK) {
				// apply validators to each bank field, retrieve validators from bank model
				Object.keys(bankControl.controls).forEach(key => {
					bankControl.controls[key].setValidators(this.initPaymentMethodBankModel()[key][1]);
					bankControl.controls[key].updateValueAndValidity();
				});
				// remove all validators from card fields
				Object.keys(cardControl.controls).forEach(key => {
					cardControl.controls[key].setValidators(null);
					cardControl.controls[key].updateValueAndValidity();
				});
			}
			if (paymentMethodType === this.PAYMENT_METHOD_TYPE.CARD) {
				// apply validators to each bank field, retrieve validators from card model
				Object.keys(cardControl.controls).forEach(key => {
					cardControl.controls[key].setValidators(this.initPaymentMethodCardModel()[key][1]);
					cardControl.controls[key].updateValueAndValidity();
				})
				// remove all validators from bank fields
				Object.keys(bankControl.controls).forEach(key => {
					bankControl.controls[key].setValidators(null);
					bankControl.controls[key].updateValueAndValidity();
				});
			}
		});
	}

	save(model: Customer, isValid: boolean) {
		// call API to save
		// ...
		console.log(model, isValid);
	}
}