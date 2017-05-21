import { Component } from '@angular/core';
import { PhotosService } from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl:'index.component.html',
  providers: [PhotosService]
})
export class UserComponent  { 
	name: string;
	email: string;
	direccion: direccion;
	hobbies: string[];
	showHobbies: boolean;
	photos: Photos[];


	constructor(private photoService: PhotosService){
		this.name = 'default'; 
		this.email = 'xxx@yyy.zzz';
		this.direccion = {
			calle : 'default calle',
			ciudad: 'default ciudad',
			estado: 'defacul estado'
		}
		this.hobbies = ['Programar','Viajar','Volar']
		this.showHobbies = false;
		this.photoService.getPhotos().subscribe( photos => {
			this.photos = photos;
		});

	}

	toggleHobbies(){
		this.showHobbies = (this.showHobbies)?false:true;
	}

	addHobby(hobby: string){
		this.hobbies.push(hobby);
	}

	deleteHobby(i: number){
		this.hobbies.splice(i,1);
	}

}


interface direccion {
	calle: string;
	ciudad: string;
	estado: string;
}

interface Photos{
	id: number;
	title: string;
	thumbnailUrl: string;
	url: string;
}