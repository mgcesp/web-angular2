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
var comment_service_1 = require('../services/comment.service');
var emitter_service_1 = require('../../emitter.service');
var comment_1 = require('../model/comment');
var CommentFormComponent = (function () {
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        this.model = new comment_1.Comment(new Date(), '', '');
        this.editing = false;
    }
    CommentFormComponent.prototype.submitComment = function () {
        var _this = this;
        // variable to hold a reference of addComment/updateComment
        var commentOperation;
        if (!this.editing) {
            // create a new comment
            commentOperation = this.commentService.addComment(this.model);
        }
        else {
            // update an existing comment
            commentOperation = this.commentService.updateComment(this.model);
        }
        // subscribe to observable
        commentOperation.subscribe(function (comments) {
            // Emit list event
            emitter_service_1.EmitterService.get(_this.listId).emit(comments);
            // empty model
            _this.model = new comment_1.Comment(new Date(), '', '');
            // switch editing status
            if (_this.editing)
                _this.editing = !_this.editing;
        }, function (err) {
            console.log(err);
        });
    };
    // ngOnChanges is called when there is a change on any Input property
    CommentFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // Listen to the 'edit' emitted event so as to populate the model
        // with the payload
        emitter_service_1.EmitterService.get(this.editId).subscribe(function (comment) {
            _this.model = comment;
            _this.editing = true;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "editId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "listId", void 0);
    CommentFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comment-form',
            templateUrl: 'comment-form.component.html'
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=comment-form.component.js.map