import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';
import { NumeroDirective } from './directives/numero.directive';
import { DataPtPipe } from './pipes/data-pt.pipe';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from './conversor-routing.component';

@NgModule({
    declarations: [
        ConversorComponent,
        NumeroDirective,
        ModalCotacaoComponent,
        DataPtPipe,
        ConversorRoutingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ConversorRoutingModule
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
