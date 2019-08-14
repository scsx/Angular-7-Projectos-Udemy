import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTarefaComponent } from './lista/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefasRoutingComponent } from './tarefas-routing.component';

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas', 
        component: TarefasRoutingComponent,
        children: [
            {
                path: '',
                redirectTo: 'listar',
                pathMatch: 'full'
            },
            {
                path: 'listar',
                component: ListarTarefaComponent
            },
            {
                path: 'cadastrar',
                component: CadastrarTarefaComponent
            },
            {
                path: 'editar/:id',
                component: EditarTarefaComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(TarefasRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TarefasRoutingModule {}