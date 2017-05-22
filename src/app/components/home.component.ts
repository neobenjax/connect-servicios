import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
  	selector: 'home',
  	templateUrl:'home.component.html',
  	providers: [TodosService]
})
export class HomeComponent  { 

	todos: Todos[];

	constructor(private todosservice: TodosService,private router: Router){
		console.log('Init home');

		this.todosservice.getTodos().subscribe( todos => {
			this.todos = todos;
		} )

	}

	toggleRealizada(indice:number,idTarea:number){
		this.todos[indice].completed = (this.todos[indice].completed)?false:true;
	}

	editarTarea(indice:number,idTarea:number){
		//this.router.navigate(['/detalle',idTarea]);
		this.router.navigate(['/detalle']);
	}

	eliminarTarea(indice:number,idTarea:number){
		let borrar = confirm('¿Esta seguro que desea eliminar la tarea '+ idTarea);
		
		if (borrar) {
			this.todos.splice(indice,1);
			alert('Tarea eliminada');
		} else {
			alert('Tarea sin modificaciones');
		}
	}


}

interface Todos{
	id: number;
	title: string;
	completed: boolean;
}