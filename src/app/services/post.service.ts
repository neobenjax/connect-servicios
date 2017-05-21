import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PhotosService{
	
	constructor(private http: Http){
		console.log('Iniciando photoservice...');
	}

	getPhotos(){
		return this.http.get('https://jsonplaceholder.typicode.com/photos')
				.map(res => res.json());
	}

}