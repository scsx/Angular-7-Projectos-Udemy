/**
* Descrição
* Comentários para criação de docs; ex: JSDoc
@author Nome do autor
@since 1.0.0
*/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CalculadoraService {

    // operações; maisculas por serem constants
    // static para ser usado sem ter instância
    static readonly SOMA: string = '+';
    static readonly SUBTRACAO: string = '-';
    static readonly DIVISAO: string = '/';
    static readonly MULTIPLICACAO: string = '*';

    constructor() {}

/**
@param nr
@param nr
@param op
@return nr; resultado
@since 1.0.0
*/

    calcular(num1: number, num2: number, operacao: string): number {

        let resultado: number;

        switch(operacao) {
            // o acesso CalculadoraService.SOMA é possível por ser static
            case CalculadoraService.SOMA:
                resultado = num1 + num2;
            break;
            case CalculadoraService.SUBTRACAO:
                resultado = num1 - num2;
            break;
            case CalculadoraService.DIVISAO:
                resultado = num1 / num2;
            break;
            case CalculadoraService.MULTIPLICACAO:
                resultado = num1 * num2;
            break;
            default:
                resultado = 0;
        }

        return resultado;
    }

}
