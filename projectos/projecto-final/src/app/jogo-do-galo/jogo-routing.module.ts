import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoRoutingComponent } from './jogo-routing.component';
import { JogoComponent } from './jogo.component';

export const JogoRoutes: Routes = [
	{
		path: 'jogo', 
		component: JogoRoutingComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: JogoComponent
            }
        ]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(JogoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class JogoRoutingModule {}