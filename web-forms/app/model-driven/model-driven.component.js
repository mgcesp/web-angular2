"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var ModelDrivenComponent = (function () {
    function ModelDrivenComponent(_fb) {
        this._fb = _fb;
        this.PAYMENT_METHOD_TYPE = {
            BANK: 'bank',
            CARD: 'card'
        };
    }
    ModelDrivenComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['Jane Doe'],
            paymentMethod: this.initPaymentMethodGroup()
        });
        // subscribe to payment method type changes
        this.subscribePaymentTypeChanges();
        // set default to type BANK
        this.setPaymentMethod(this.PAYMENT_METHOD_TYPE.BANK);
    };
    // Initialize payment Group
    ModelDrivenComponent.prototype.initPaymentMethodGroup = function () {
        var group = this._fb.group({
            type: [''],
            card: this._fb.group(this.initPaymentMethodCardModel()),
            bank: this._fb.group(this.initPaymentMethodBankModel())
        });
        return group;
    };
    // Initialize card model
    ModelDrivenComponent.prototype.initPaymentMethodCardModel = function () {
        // regex for credit cards
        var cardNoRegex = '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})';
        // regex for expiration format MM/YY
        var expiryRegex = '^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$';
        var model = {
            cardNo: ['', [forms_1.Validators.required, forms_1.Validators.pattern(cardNoRegex)]],
            cardHolder: ['', forms_1.Validators.required],
            expiry: ['', [forms_1.Validators.required, forms_1.Validators.pattern(expiryRegex)]]
        };
        return model;
    };
    // Initialize bank model
    ModelDrivenComponent.prototype.initPaymentMethodBankModel = function () {
        var model = {
            accountNo: ['', forms_1.Validators.required],
            accountHolder: ['', forms_1.Validators.required],
            routingNo: ['', forms_1.Validators.required]
        };
        return model;
    };
    // Set payment method for Form
    ModelDrivenComponent.prototype.setPaymentMethod = function (type) {
        // update payment method type value
        var ctrl = this.myForm.controls.paymentMethod.controls.type;
        ctrl.setValue(type);
    };
    // Conditional validation
    ModelDrivenComponent.prototype.subscribePaymentTypeChanges = function () {
        var _this = this;
        // controls
        var pmControl = this.myForm.controls.paymentMethod;
        var bankControl = pmControl.controls.bank;
        var cardControl = pmControl.controls.card;
        // initialize value changes stream
        var changes$ = pmControl.controls.type.valueChanges;
        // subscribe to the stream
        changes$.subscribe(function (paymentMethodType) {
            if (paymentMethodType === _this.PAYMENT_METHOD_TYPE.BANK) {
                // apply validators to each bank field, retrieve validators from bank model
                Object.keys(bankControl.controls).forEach(function (key) {
                    bankControl.controls[key].setValidators(_this.initPaymentMethodBankModel()[key][1]);
                    bankControl.controls[key].updateValueAndValidity();
                });
                // remove all validators from card fields
                Object.keys(cardControl.controls).forEach(function (key) {
                    cardControl.controls[key].setValidators(null);
                    cardControl.controls[key].updateValueAndValidity();
                });
            }
            if (paymentMethodType === _this.PAYMENT_METHOD_TYPE.CARD) {
                // apply validators to each bank field, retrieve validators from card model
                Object.keys(cardControl.controls).forEach(function (key) {
                    cardControl.controls[key].setValidators(_this.initPaymentMethodCardModel()[key][1]);
                    cardControl.controls[key].updateValueAndValidity();
                });
                // remove all validators from bank fields
                Object.keys(bankControl.controls).forEach(function (key) {
                    bankControl.controls[key].setValidators(null);
                    bankControl.controls[key].updateValueAndValidity();
                });
            }
        });
    };
    ModelDrivenComponent.prototype.save = function (model, isValid) {
        // call API to save
        // ...
        console.log(model, isValid);
    };
    ModelDrivenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'model-driven',
            templateUrl: 'model-driven.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ModelDrivenComponent);
    return ModelDrivenComponent;
}());
exports.ModelDrivenComponent = ModelDrivenComponent;
//# sourceMappingURL=model-driven.component.js.map