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

    jogar(posX: number, posY: number): void {
        this.jogoService.jogar(posX, posY);
    }

    exibirX(posX: number, posY: number): boolean {
        return this.jogoService.exibirX(posX, posY);
    }

    exibirO(posX: number, posY: number) {
        return this.jogoService.exibirO(posX, posY);
    }

    exibirVitoria(posX: number, posY: number): boolean {
        return this.jogoService.exibirVitoria(posX, posY);
    }

    get jogador(): number {
        return this.jogoService.jogador;
    }

    novoJogo(): void {
        this.jogoService.novoJogo();
    }

}
