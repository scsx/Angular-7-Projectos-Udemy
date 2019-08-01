import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
    selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls: ['./calculadora.component.scss']
})

export class CalculadoraComponent implements OnInit {

    private numero1: string;
    private numero2: string;
    private operacao: string;
    private resultado: number;
    historico: Array < string > = ['0']; // extra

    constructor(private calcService: CalculadoraService) {}

    ngOnInit() {
        this.limpar();
    }

    limpar(): void {
        this.numero1 = '0';
        this.numero2 = null;
        this.operacao = null;
        this.resultado = null;
        this.historico = ['0'];
    }

    // ver se estamos no 1º numero (não há operação) ou no 2º
    adicionarNumero(numero: string): void {
        if (this.operacao === null) {
            this.numero1 = this.concatenarNumero(this.numero1, numero);
            this.historico.pop();
            this.historico.push(this.numero1);
            console.log(this.historico);
        } else {
            this.numero2 = this.concatenarNumero(this.numero2, numero);

            let lastEntry: string = this.historico[this.historico.length - 1];
            if (lastEntry !== this.operacao) {
                this.historico.pop();
            }
            this.historico.push(this.numero2);
        }
    }

    // juntar digitos (1,3,8) introduzidos num número (138), seja o 1º ou o 2º número
    concatenarNumero(numAtual: string, numConcat: string): string {
        // caso contenha apenas 0 ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }
        // se começar por '.' é decimal, concatena 0 para ficar 0.12...
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }
        // caso digite '.' e já exista um '.', só faz return
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    // Executa lógica quando um operador for seleccionao. Caso já exista uma operação executa-a e define a nova operação
    definirOperacao(operacao: string): void {

        // caso contenha apenas 0 ou null, reinicia o valor
        if (this.operacao === null) {
            this.operacao = operacao;
            this.historico.push(this.operacao);
            return;
        }

        // se há operação e num2, calcula
        if (this.numero2 !== null) {
            this.resultado = this.calcService.calcular(
                parseFloat(this.numero1),
                parseFloat(this.numero2),
                this.operacao
            );
            this.operacao = operacao;
            this.historico.push(this.operacao);
            this.numero1 = this.resultado.toString();
            this.numero2 = null;
            this.resultado = null;
        }

    }

    // calculo de operação, por ex, ao carregar no =
    calcular(): void {
        if (this.numero2 === null) {
            return;
        }

        this.resultado = this.calcService.calcular(
            parseFloat(this.numero1),
            parseFloat(this.numero2),
            this.operacao
        );
    }

    // return do valor a ser exibido na 'tela' da calculadora
    get display(): string {
        if (this.resultado !== null) {
            return this.resultado.toString();
        }
        if (this.numero2 !== null) {
            return this.numero2;
        }
        return this.numero1;
    }

}