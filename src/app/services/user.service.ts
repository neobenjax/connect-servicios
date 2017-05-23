import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService{
	
	constructor(private http: Http){
		console.log('Iniciando UserService...');
	}

	checkUser(user:string,password:string){

		return this.http.get('http://localhost:3002/users?user='+user+'&password='+password)
				.map(res => res.json());
	}

}