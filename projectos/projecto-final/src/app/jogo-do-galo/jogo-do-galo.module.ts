import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoComponent } from './jogo.component';
import { JogoService } from './shared/jogo.service';
import { JogoRoutingModule } from './jogo-routing.module';
import { JogoRoutingComponent } from './jogo-routing.component';

@NgModule({
    imports: [
        CommonModule,
        JogoRoutingModule
    ],
    declarations: [
        JogoComponent,
        JogoRoutingComponent
    ],
    exports: [
        JogoComponent
    ],
    providers: [
        JogoService
    ]
})
export class JogoDoGaloModule {}
