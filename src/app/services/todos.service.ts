import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TodosService{
	
	constructor(private http: Http){
		console.log('Iniciando todos...');
	}

	getTodos(){
		return this.http.get('http://jsonplaceholder.typicode.com/todos')
				.map(res => res.json());
	}

	getTodo(id:number){
		return this.http.get('http://jsonplaceholder.typicode.com/todos/1')
				.map(res => res.json());
	}

}