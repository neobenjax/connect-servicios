import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent }  from './components/login.component';
import { HomeComponent }  from './components/home.component';
import { DetalleComponent }  from './components/detalle.component';

const appRoutes: Routes = [
	{
		path:'',
		component: LoginComponent
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'detalle',
		component: DetalleComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);