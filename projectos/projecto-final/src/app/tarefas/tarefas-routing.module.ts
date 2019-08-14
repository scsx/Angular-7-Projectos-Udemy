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
                path: 'tarefas',
                redirectTo: 'tarefas/listar'
            },
            {
                path: 'tarefas/listar',
                component: ListarTarefaComponent
            },
            {
                path: 'tarefas/cadastrar',
                component: CadastrarTarefaComponent
            },
            {
                path: 'tarefas/editar/:id',
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