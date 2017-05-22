import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
  	selector: 'login',
  	templateUrl:'login.component.html',
})
export class LoginComponent  { 

	

	constructor(private router: Router){
		console.log('Init');
	}

	submitLogin( usuario:string, password:string ){

		if(usuario=='' || password=='')
			alert('Debe colocar usuario y password para continuar');
		else if( usuario == 'benjamin' && password =='1234' ){
			this.router.navigate(['/home']);
		} else {
			alert('Usuario y/o password incorrectos');
		}
		
	}

}