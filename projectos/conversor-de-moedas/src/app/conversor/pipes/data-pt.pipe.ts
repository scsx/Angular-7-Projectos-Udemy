import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dataPt'
})
export class DataPtPipe implements PipeTransform {

    transform(dataUS: string): string {
        if (!dataUS) {
            return '';
        }

        const dataArr = dataUS.split('-');

        if (dataArr.length !== 3) {
            return dataUS;
        }

        const meses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro','Dezembro'];

        dataArr[1] = meses[ parseInt(dataArr[1]) - 1];

        return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
    }

}
