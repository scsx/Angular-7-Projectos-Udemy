import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DadosService } from './dados.service';

// truque(?), ver 124. Implementando os gráficos no componente - parte 1/2
declare var google: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

    private dados: any;
    elementWidth: number;

    constructor(private dadosService: DadosService) {}

    ngOnInit() {
        this.dadosService.obterDados().subscribe(
            dados => {
                this.dados = dados;
                this.startGoogle();
            }
        );
    }

    // to read div's width // <HTMLElement> = type assertion to avoid VSCode error
    ngAfterViewInit() {
        let oneEl = <HTMLElement> document.getElementsByClassName("col-sm")[0];
        this.elementWidth = oneEl.offsetWidth;
    }

    startGoogle(): void {
        if (typeof (google) !== 'undefined') {
            google.charts.load('current', {
                'packages': ['corechart']
            });
            setTimeout(() => {
                google.charts.setOnLoadCallback(this.exibirGraficos());
            }, 1000); // dá tempo para a função carregar
        }
    }

    // Tabela de info dos dados
    obterDataTable(): any {
        const data = new google.visualization.DataTable();
        data.addColumn('string', 'Mês');
        data.addColumn('number', 'Quantidade');
        data.addRows(this.dados);
        return data;
    }

    // Opções de título e aspecto
    obterOpcoes(): any {
        return {
            'title': 'Frangos vendidos 1º semestre',
            //'width': this.elementWidth,
            'width': 400,
            //'height': this.elementWidth,
            'height': 300,
            'colors': ['#cb3a07', '#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
            'backgroundColor': { fill:'transparent' }
        };
    }

    // obter elemento HTML e criar chart obj (extra)
    obterElementoCriarPie(el: string) {
        const element = document.getElementById(el);
        return new google.visualization.PieChart(element);
    }

    // Mostrar todos os gráficos
    exibirGraficos(): void {
        this.pieChart();
        this.threeDpieChart();
        this.donutChart();
        this.barChart();
        this.lineChart();
        this.columnChart();
    }

    // GRÁFICOS (6)
    pieChart(): void {
        this.obterElementoCriarPie('pie_chart').draw(this.obterDataTable(), this.obterOpcoes());
    }

    threeDpieChart(): void {
        const opcoes = this.obterOpcoes();
        // depois de opcoes estar numa variavel local adiciona-se uma prop neste caso apenas:
        opcoes['is3D'] = true;
        this.obterElementoCriarPie('3d_pie_chart').draw(this.obterDataTable(), opcoes);
    }

    donutChart(): void {
        const opcoes = this.obterOpcoes();
        opcoes['pieHole'] = 0.4;
        this.obterElementoCriarPie('donut_chart').draw(this.obterDataTable(), opcoes);
    }

    // not pie chart
    barChart(): void {
        const element = document.getElementById('bar_chart');
        const chart = new google.visualization.BarChart(element);
        chart.draw(this.obterDataTable(), this.obterOpcoes());
    }

    lineChart(): void {
        const element = document.getElementById('line_chart');
        const chart = new google.visualization.LineChart(element);
        chart.draw(this.obterDataTable(), this.obterOpcoes());
    }

    columnChart(): void {
        const element = document.getElementById('column_chart');
        const chart = new google.visualization.ColumnChart(element);
        chart.draw(this.obterDataTable(), this.obterOpcoes());
    }

}
