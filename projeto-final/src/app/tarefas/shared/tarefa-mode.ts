import { CommonModule } from '@angular/common';
export class Tarefa{
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ){}
}