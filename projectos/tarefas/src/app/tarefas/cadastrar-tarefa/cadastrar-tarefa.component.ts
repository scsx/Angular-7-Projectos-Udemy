import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
    selector: 'app-cadastrar-tarefa',
    templateUrl: './cadastrar-tarefa.component.html',
    styleUrls: ['./cadastrar-tarefa.component.scss']
})

export class CadastrarTarefaComponent implements OnInit {

    tarefa: Tarefa;
    @ViewChild('formularioRef', {static: false}) formularioRef: NgForm;

    constructor( private tarefaService: TarefaService,
    private router: Router) {}

    ngOnInit() {
        this.tarefa = new Tarefa(); // começar com instância
    }

    cadastrar(): void {
        if(this.formularioRef.form.valid) {
            this.tarefaService.adicionar(this.tarefa);
            this.router.navigate(["/tarefas"]);
        }
    }

}