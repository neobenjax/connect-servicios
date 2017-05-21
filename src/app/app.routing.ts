import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { UserComponent }  from './components/user.component';
import { FotoComponent }  from './components/foto.component';

const appRoutes: Routes = [
	{
		path:'',
		component: UserComponent
	},
	{
		path:'foto',
		component: FotoComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);