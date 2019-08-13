import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DadosService {

    readonly dados = [
        ['Jan', 33],
        ['Fev', 68],
        ['Mar', 49],
        ['Abr', 15],
        ['Mai', 80],
        ['Jun', 27]
    ];

    constructor() {}

    obterDados(): Observable<any> {
        return new Observable( obs => {
            obs.next(this.dados);
            obs.complete();
        });
    }

}
