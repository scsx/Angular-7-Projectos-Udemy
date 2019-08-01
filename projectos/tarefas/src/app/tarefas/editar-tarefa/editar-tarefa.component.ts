import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-editar-tarefa',
    templateUrl: './editar-tarefa.component.html',
    styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {

    @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
    tarefa: Tarefa;
    
    constructor(
        private tarefaService: TarefaService,
        private actRoute: ActivatedRoute,
        private route: Router
    ) {}

    ngOnInit() {
        const id = +this.actRoute.snapshot.params['id'];
        this.tarefa = this.tarefaService.buscarPorId(id);
        //console.log(this.tarefa);
    }

    atualizar() {
        if (this.formTarefa.valid) {
            this.tarefaService.actualizar(this.tarefa);
            this.route.navigate(['/tarefas']);
        }
    }

}
