import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// directive para que só números sejam usados no input de valor
@Directive({
    selector: '[numeroDirective]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumeroDirective,
        multi: true
    }]
})
export class NumeroDirective implements ControlValueAccessor {

    onTouched: any;
    onChange: any;

    constructor( private el: ElementRef) {}

    @HostListener('keyup', ['$event'])
    
    // limpa o valor introduzido mas não actualiza o ngModel, para isso usa-se acima NG_VALUE_ACCESSOR
    largarTecla($event: any) {
        let valor = $event.target.value;
        let posDecimais = valor.indexOf('.'); // aceita um ponto

        valor = valor.replace(/[\D]/g, '');

        if (posDecimais > 0) {
            valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
        }

        $event.target.value = valor;
        this.onChange(valor);
    }

    // MÉTODOS DE ControlValueAccessor
    // Regista função a ser chamada para atualizar valor no model quando o valor muda na UI
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // Regista função a ser chamada para atualizar valor no model para on blur
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // Escreve na view o valor contido no model
    writeValue(value: any): void {
        this.el.nativeElement.value = value;
    }

}