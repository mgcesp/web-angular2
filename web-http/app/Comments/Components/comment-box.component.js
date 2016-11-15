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
var comment_1 = require('../model/comment');
var emitter_service_1 = require('../../emitter.service');
var comment_service_1 = require('../services/comment.service');
var CommentBoxComponent = (function () {
    function CommentBoxComponent(commentService) {
        this.commentService = commentService;
    }
    CommentBoxComponent.prototype.editComment = function () {
        // emmits an edit comment tracked by the Input ID
        emitter_service_1.EmitterService.get(this.editId).emit(this.comment);
    };
    CommentBoxComponent.prototype.deleteComment = function (id) {
        var _this = this;
        this.commentService.removeComment(id).subscribe(function (comments) {
            emitter_service_1.EmitterService.get(_this.listId).emit(comments);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', comment_1.Comment)
    ], CommentBoxComponent.prototype, "comment", void 0);
    __decorate([
        // holds data passed from a parent component
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentBoxComponent.prototype, "listId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentBoxComponent.prototype, "editId", void 0);
    CommentBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comment-box',
            templateUrl: 'comment-box.component.html'
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());
exports.CommentBoxComponent = CommentBoxComponent;
//# sourceMappingURL=comment-box.component.js.map