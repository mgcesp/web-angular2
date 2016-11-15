import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Comment } from '../model/comment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

	constructor(private http: Http) {}
	// base url
	private commentsUrl = 'http://localhost:8000/api/commments';
	// We make sure the methods return an observable of type Comment
	getComments():Observable<Comment[]> {
		// ..using the http get request
		return this.http.get(this.commentsUrl)
										.map((res:Response) => res.json())
										.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	addComment(body: Object):Observable<Comment[]> {
		let bodyString = JSON.stringify(body);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});

		return this.http.post(this.commentsUrl, body, options)
										.map((res:Response) => res.json())
										.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	updateComment(body: Object):Observable<Comment[]> {
		let bodyString = JSON.stringify(body);
		let headers = new Headers({'Conten-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.put('${this.commentsUrl}/${body[id]}', body, options)
										.map((res:Response) => res.json())
										.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	removeComment(id:string):Observable<Comment[]> {
		return this.http.delete('${this.commentsUrl}/${id}')
										.map((res:Response) => res.json())
										.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}