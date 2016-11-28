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
var ChildComponent = (function () {
    function ChildComponent() {
        this.childChanged = new core_1.EventEmitter();
    }
    ChildComponent.prototype.onChange = function (value) {
        this.childChanged.emit(value);
    };
    ChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-child',
            template: "\n\t\t<h2>Child Component</h2>\n\t\t<input type=\"text\" #childInput (keyup)=\"onChange(childInput.value)\"/>\n\t\t<p>The parent value is {{parentValue}}</p>\n\t",
            inputs: ['parentValue'],
            outputs: ['childChanged']
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map