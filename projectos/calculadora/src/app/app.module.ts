import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//import { CalculadoraModule } from './calculadora/calculadora.module'; // normal
import { CalculadoraModule } from './calculadora'; // com barrels e index.ts (https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html)

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CalculadoraModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
