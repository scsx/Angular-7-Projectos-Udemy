import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';
import { NumeroDirective } from './directives/numero.directive';
import { DataPtPipe } from './pipes/data-pt.pipe';

@NgModule({
    declarations: [
        ConversorComponent,
        NumeroDirective,
        ModalCotacaoComponent,
        DataPtPipe
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
