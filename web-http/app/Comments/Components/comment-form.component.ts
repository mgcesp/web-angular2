import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { CommentBoxComponent } from './comment-box.component';
import { CommentService } from '../services/comment.service';
import { EmitterService } from '../../emitter.service';

import { Comment } from '../model/comment';

@Component({
	moduleId: module.id,
	selector: 'comment-form',
	templateUrl: 'comment-form.component.html'
})
export class CommentFormComponent implements OnChanges {
	constructor(private commentService: CommentService) {}

	private model = new Comment(new Date(), '', '');
	private editing = false;

	@Input() editId: string;
	@Input() listId: string;

	submitComment() {
		// variable to hold a reference of addComment/updateComment
		let commentOperation:Observable<Comment[]>;

		if(!this.editing) {
			// create a new comment
			commentOperation = this.commentService.addComment(this.model);
		} else {
			// update an existing comment
			commentOperation = this.commentService.updateComment(this.model);
		}

		// subscribe to observable
		commentOperation.subscribe(
			comments => {
				// Emit list event
				EmitterService.get(this.listId).emit(comments);
				// empty model
				this.model = new Comment(new Date(), '', '');
				// switch editing status
				if(this.editing) this.editing = !this.editing;
			},
			err => {
				console.log(err);
			}
		);
	}
	// ngOnChanges is called when there is a change on any Input property
	ngOnChanges() {
		// Listen to the 'edit' emitted event so as to populate the model
		// with the payload
		EmitterService.get(this.editId).subscribe((comment:Comment) => {
			this.model = comment;
			this.editing = true;
		});
	}
}