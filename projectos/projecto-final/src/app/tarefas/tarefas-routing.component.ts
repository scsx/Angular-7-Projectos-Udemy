import { Component } from "@angular/core";


@Component({
    template: `
        <h4 class="mt-4">Gestor de tarefas</h4>
        <p>
            <a href="javascript:void(0);" class="btn btn-success my-2"
                [routerLink]="['/tarefas/cadastrar']">Nova tarefa</a>
        </p>
        <router-outlet></router-outlet>
    `
})

export class TarefasRoutingComponent {}