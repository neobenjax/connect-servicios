import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
  	selector: 'detalle',
  	templateUrl:'detalle.component.html',
  	providers: [TodosService]
})
export class DetalleComponent  { 

	todo: Todo;
	

	constructor(private todosservice: TodosService,private router: Router){
		console.log('Init Detalle');

		this.todo = {id:0,title:'',completed:false};
		
		this.todosservice.getTodo(1).subscribe( todo => {
			this.todo = todo;
		} )

	}

	editTodo(tituloNuevo:string){
		this.todo.title = tituloNuevo;

		
		this.router.navigate(['/home']);
		
	}

}

interface Todo{
	id: number;
	title: string;
	completed: boolean;
}
