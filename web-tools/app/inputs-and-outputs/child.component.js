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
var core_2 = require('@angular/core');
var ChildComponent = (function () {
    function ChildComponent() {
        this.childEvent = new core_2.EventEmitter();
    }
    ChildComponent.prototype.onChange = function (value) {
        this.childEvent.emit(value);
    };
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: "\n\t<h2>ChildComponent</h2>\n\t<label>Enter ChildComponent value:</label>\n\t<input type=\"text\" #childText (keyup)=\"onChange(childText.value)\"/>\n\t<p>Value from parent component</p>\n\t{{parentData}}\n\t",
            inputs: ['parentData'],
            outputs: ['childEvent']
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map