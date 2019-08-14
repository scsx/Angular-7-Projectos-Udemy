import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorRoutingComponent } from './conversor-routing.component';
import { ConversorComponent } from './components/conversor.component';

export const ConversorRoutes: Routes = [
	{
		path: 'conversor', 
		component: ConversorRoutingComponent,
        children: [
            {
                path: '',
                component: ConversorComponent
            }
        ]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(ConversorRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ConversorRoutingModule {}