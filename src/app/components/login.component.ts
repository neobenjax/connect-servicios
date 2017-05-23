import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	moduleId: module.id,
  	selector: 'login',
  	templateUrl:'login.component.html',
  	providers: [UserService]
})
export class LoginComponent  { 

	constructor(private router: Router,private userservice: UserService){
		console.log('Init');
	}

	submitLogin( usuario:string, password:string ){

		if(usuario=='' || password==''){

			alert('Debe colocar usuario y password para continuar');

		} else {

			this.userservice.checkUser(usuario,password).subscribe( user => {

				if(user.length > 0 && usuario == user[0].user && password == user[0].password){

					this.router.navigate(['/home']);

				} else {

					alert('Usuario y/o password incorrectos');	

				}

			} )

		}
		
	}
	

}
