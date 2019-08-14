import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// modules
import { DashboardModule } from './dashboard/dashboard.module';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor/conversor.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { JogoDoGaloModule } from './jogo-do-galo/jogo-do-galo.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DashboardModule,
        CalculadoraModule,
        ConversorModule,
        TarefasModule,
        JogoDoGaloModule,
        
        AppRoutingModule // deve ser sempre último
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
