import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    //showButton: boolean = true;
    
    constructor() {}

    listarTodas(): Tarefa[] {
        const tarefas = localStorage['tarefas'];
        return tarefas ? JSON.parse(tarefas) : [];
    }

    adicionar( tarefa: Tarefa ): void {
        const tarefas: Tarefa[] = this.listarTodas();
        tarefa.id = new Date().getTime();
        tarefas.push(tarefa);
        //localStorage['tarefas'] = JSON.stringify(tarefas);
        this.writeToLocalStorage(tarefas);
    }

    buscarPorId( id: number ): Tarefa {
        const tarefas: Tarefa[] = this.listarTodas();
        return tarefas.find(tarefa => tarefa.id === id);
    }

    actualizar( tarefa: Tarefa ): void {
        const tarefas: Tarefa[] = this.listarTodas();
        tarefas.forEach((obj, index, objs) => {
            if (tarefa.id === obj.id) {
                objs[index] = tarefa;
            }
        });
        //localStorage['tarefas'] = JSON.stringify(tarefas);
        this.writeToLocalStorage(tarefas);
    }

    remover( id: number ): void {
        let tarefas: Tarefa[] = this.listarTodas(); // let em vez de const pq vamos modificar a estrutura de "tarefas"
        tarefas = tarefas.filter(tarefa => tarefa.id !== id);
        //localStorage['tarefas'] = JSON.stringify(tarefas);
        this.writeToLocalStorage(tarefas);
    }

    alterarStatus( id: number ): void {
        const tarefas: Tarefa[] = this.listarTodas();
        tarefas.forEach((obj, index, objs) => {
            if (id === obj.id) {
                objs[index].concluida = !obj.concluida;
            }
        });
        //localStorage['tarefas'] = JSON.stringify(tarefas);
        this.writeToLocalStorage(tarefas);
    }

    // extra
    writeToLocalStorage(tarefas: Tarefa[]): void {
        localStorage['tarefas'] = JSON.stringify(tarefas);
    }

}
