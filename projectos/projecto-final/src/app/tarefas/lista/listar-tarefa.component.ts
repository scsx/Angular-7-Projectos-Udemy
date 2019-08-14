import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
    selector: 'app-listar-tarefa',
    templateUrl: './listar-tarefa.component.html',
    styleUrls: ['./listar-tarefa.component.scss']
})

export class ListarTarefaComponent implements OnInit {

    tarefas: Tarefa[];

    //TESTES
    /* tarefas: Tarefa[] = [
        {id: 2441, nome: "Ovos", concluida: false, "prioridade": 2},
        {id: 2441, nome: "Matar um cão", concluida: false},
        {id: 2441, nome: "Tarefa concluida", concluida: true},
        {id: 2441, nome: "Ir ao talho", concluida: false},
        {id: 51651, nome: "Fazer curso", concluida: false}
    ]; */

    constructor(private tarefaService: TarefaService) {}

    ngOnInit() {
        this.tarefas = this.obterTodas();
        /* TESTES
        this.tarefas.push(
            new Tarefa(1, "Ir ao Brasil", true)
        );
        */
       
        console.log(this.tarefas);
    }

    obterTodas(): Tarefa[] {
        return this.tarefaService.listarTodas();
    }

    remover( $event: any, tarefa: Tarefa): void {
        $event.preventDefault(); // para evitar reload da página (não deve fazer falta)
        if( confirm('Deseja remover a tarefa ' + tarefa.nome + '?') ) {
            this.tarefaService.remover(tarefa.id);
            this.tarefas = this.obterTodas();
        }
    }

    alterarStatus( tarefa: Tarefa): void {
        if( confirm('Deseja alterar o status da tarefa ' + tarefa.nome + '?') ) {
            this.tarefaService.alterarStatus(tarefa.id);
            this.tarefas = this.obterTodas();
        }
    }

}
