import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasRoutingComponent } from './tarefas-routing.component';

import { RouterModule } from '@angular/router';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import {FormsModule} from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';


@NgModule({
  declarations: [TarefasRoutingComponent,
    ListarTarefaComponent, CadastrarTarefasComponent, EditarTarefaComponent, TarefaConcluidaDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TarefasRoutingModule
    
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
