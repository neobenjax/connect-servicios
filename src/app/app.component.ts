import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <div class="contenedor-principal">
          <header></header>
    			<router-outlet></router-outlet>
    			<footer></footer>
        </div>
  			`,
})
export class AppComponent  { 
}