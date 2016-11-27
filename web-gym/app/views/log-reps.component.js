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
var LogRepsComponent = (function () {
    function LogRepsComponent() {
        this.selectTask = new core_1.EventEmitter();
        this.repCount = 0;
    }
    LogRepsComponent.prototype.ngOnInit = function () { };
    LogRepsComponent.prototype.addRep = function () {
        this.repCount++;
        console.log(this.repCount);
    };
    LogRepsComponent.prototype.subtractRep = function () {
        this.repCount--;
        console.log(this.repCount);
    };
    LogRepsComponent.prototype.setReps = function (task) {
        task.reps = this.repCount;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LogRepsComponent.prototype, "selectTask", void 0);
    LogRepsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'log-reps',
            template: "\n\t<h2>Log Reps</h2>\n\t<h1>{{repCount}}</h1>\n\t<button (click)=\"addRep()\">Add</button>\n\t<button (click)=\"subtractRep()\">Subtract</button>\n\t<button (click)=\"setReps(Task)\">SUBMIT</button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], LogRepsComponent);
    return LogRepsComponent;
}());
exports.LogRepsComponent = LogRepsComponent;
//# sourceMappingURL=log-reps.component.js.map