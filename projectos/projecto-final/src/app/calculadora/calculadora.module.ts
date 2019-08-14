import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';
import { CalculadoraRoutingModule } from './calculadora-routing.module';

@NgModule({
    declarations: [
        CalculadoraComponent,
        CalculadoraRoutingComponent
    ],
    imports: [
        CommonModule,
        CalculadoraRoutingModule
    ],
    exports: [
        CalculadoraComponent
    ],
    providers: [
        //CalculadoraService // já está providedIn: 'root'
    ]
})
export class CalculadoraModule implements OnInit {

    constructor() {}

    ngOnInit() {}

}
