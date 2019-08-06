import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoComponent } from './jogo.component';
import { JogoService } from './shared/jogo.service';

@NgModule({
    declarations: [
        JogoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        JogoComponent
    ],
    providers: [
        JogoService
    ]
})
export class JogoDoGaloModule {}
