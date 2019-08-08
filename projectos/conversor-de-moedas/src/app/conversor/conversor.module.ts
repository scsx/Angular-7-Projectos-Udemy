import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';
import { NumeroDirective } from './directives/numero.directive';

@NgModule({
    declarations: [
        ConversorComponent,
        NumeroDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ConversorComponent
    ],
    providers: [
        //MoedaService,
        //ConversorService
    ]
})
export class ConversorModule {}
