import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConversorService } from '../services/conversor.service';
import { ConversaoResponse } from '../models/conversao-response.model';
import { Conversao } from '../models/conversao.model';

@Component({
    selector: 'app-modal-cotacao',
    templateUrl: './modal-cotacao.component.html',
    styleUrls: ['./modal-cotacao.component.scss']
})
export class ModalCotacaoComponent implements OnInit {

    @Input() id: string;
    @Input() conversaoResponse: ConversaoResponse;
    @Input() conversao: Conversao;
    @Output() novaPesquisa: EventEmitter<any> = new EventEmitter<any>();

    constructor( private conversorService: ConversorService) {}

    ngOnInit() {}

    novaConsulta() {
        this.novaPesquisa.emit();
    }


    // get valor
    get valorConvertido(): string {
        if (this.conversaoResponse === undefined) {
            return ;
        }
        return ( this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
    }

    // valor do rate naquele dia
    get cotacaoPara(): number {
        return this.conversorService.cotacaoPara(
            this.conversaoResponse,
            this.conversao
        );
    }

    // 
    get cotacaoDe(): string {
        return this.conversorService.cotacaoDe(
            this.conversaoResponse,
            this.conversao
        );
    }

    // data
    get dataCotacao(): string {
        return this.conversorService.dataCotacao( this.conversaoResponse );
    }

}
