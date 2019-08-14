import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './lista/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

@NgModule({
    declarations: [
        ListarTarefaComponent,
        CadastrarTarefaComponent,
        EditarTarefaComponent,
        TarefaConcluidaDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        // não se pôs TarefaService porque está, ele próprio, providedIn root
    ]
})
export class TarefasModule {}
