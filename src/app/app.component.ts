import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  			<ul>
  				<li><a routerLink="/">Main</a></li>
  				<li><a routerLink="/foto">Detalle</a></li>
  			</ul>
  			<hr />
  			<router-outlet></router-outlet>
  			<hr />
  			`,
})
export class AppComponent  { 
}