import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

    @Input() tarefaConcluida: boolean; // ter o mesmo nome que o selector é suposto facilitar

    constructor( private el: ElementRef) {}

    ngOnInit() {
        if (this.tarefaConcluida) {
            this.el.nativeElement.style.fontStyle = "italic";
        }
    }

}
