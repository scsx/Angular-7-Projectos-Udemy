export class Tarefa {
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean,
        public prioridade?: 1 | 2 | 3 | 4
    ) {}
}