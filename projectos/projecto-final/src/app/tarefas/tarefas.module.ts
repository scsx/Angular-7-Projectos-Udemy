import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarTarefaComponent } from './lista/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefasRoutingComponent } from './tarefas-routing.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

import { TarefasRoutingModule } from './tarefas-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TarefasRoutingModule
    ],
    declarations: [
        ListarTarefaComponent,
        CadastrarTarefaComponent,
        EditarTarefaComponent,
        TarefaConcluidaDirective,
        TarefasRoutingComponent
    ]
})

export class TarefasModule {}