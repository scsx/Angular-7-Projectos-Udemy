import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';

@NgModule({
    declarations: [
        CalculadoraComponent
    ],
    imports: [
        CommonModule
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
