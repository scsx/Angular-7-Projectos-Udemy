import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConversaoResponse } from '../models/conversao-response.model';
import { Conversao } from '../models/conversao.model';
import { Moeda } from '../models/moeda.model';
import { MoedaService } from '../services/moeda.service';
import { ConversorService } from '../services/conversor.service';

@Component({
    selector: 'app-conversor',
    templateUrl: './conversor.component.html',
    styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

    private moedas: Moeda[];
    private conversao: Conversao;
    private possuiErro: boolean;
    private conversaoResponse: ConversaoResponse;

    @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;
    
    constructor(
        private moedaService: MoedaService,
        private conversorService: ConversorService) {}

    ngOnInit() {
        this.moedas = this.moedaService.listarTodas();
        this.init();
    }

    init(): void {
        this.conversao = new Conversao('USD', 'EUR', null);
        this.possuiErro = false;
        //console.log(this.conversao);
    }

    converter(): void {
        if (this.conversaoForm.form.valid) {
            //alert('Convertendo: ' + JSON.stringify(this.conversao))
            this.conversorService.converter(this.conversao).subscribe(
                response => this.conversaoResponse = response,
                (error) => {
                    this.possuiErro = true;
                    console.log(error);
                }
            );
        }
    }

}
