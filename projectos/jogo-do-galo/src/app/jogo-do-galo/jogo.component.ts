import { Component, OnInit } from '@angular/core';
import { JogoService } from './shared/jogo.service';

@Component({
    selector: 'app-jogo',
    templateUrl: './jogo.component.html',
    styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

    constructor(private jogoService: JogoService) {}

    ngOnInit() {
        this.jogoService.inicializar();
    }

    get showInicio(): boolean {
        return this.jogoService.showInicio;
    }

    get showTabuleiro(): boolean {
        return this.jogoService.showTabuleiro;
    }

    get showFinal(): boolean {
        return this.jogoService.showFinal;
    }

    iniciarJogo(): void {
        this.jogoService.iniciarJogo();
    }

}
