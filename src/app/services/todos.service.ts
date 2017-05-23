import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TodosService{

	headers: Headers;
    options: RequestOptions;

	
	constructor(private http: Http){
		console.log('Iniciando todos...');
		this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
	}

	getTodos(){
		return this.http.get('http://localhost:3002/todos')
				.map(res => res.json());
	}

	getTodo(id:number){
		return this.http.get('http://localhost:3002/todos/'+id)
				.map(res => res.json());
	}

	setTodo(todo: Todo) {

		let body = JSON.stringify(todo);
		let url = 'http://localhost:3002/todos/'+todo.id
		return this.http.put(url, body, this.options)
				.map(res => res.json());

	}

}

interface Todo{
	id: number;
	title: string;
	completed: boolean;
}