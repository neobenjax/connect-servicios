import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
	moduleId: module.id,
  	selector: 'detalle',
  	templateUrl:'detalle.component.html',
  	providers: [TodosService]
})
export class DetalleComponent  { 

	todo: Todo;
	error: boolean;
	
	constructor(private todosservice: TodosService,private router: Router,private route: ActivatedRoute){
		console.log('Init Detalle');
		this.todo = {id:0,title:'',completed:false};
		this.error = false;
	}

	ngOnInit() {
		console.log('On init');
		this.route.params
			.switchMap( (params: Params) => this.todosservice.getTodo(params['id']))
			.subscribe( todo => {
							console.log(todo);
							this.todo = todo;
						},
						error => {
							console.log(error);
							this.error = true;
						})
	}

	editTodo(tituloNuevo:string){
		this.todo.title = tituloNuevo;
		
		this.todosservice.setTodo(this.todo).subscribe( todonew => {
			console.log(todonew);
			console.log('Actualizado');
			this.router.navigate(['/home']);
		} );
		
	}

	regresar(){
		this.router.navigate(['/home']);
	}

}

interface Todo{
	id: number;
	title: string;
	completed: boolean;
}
