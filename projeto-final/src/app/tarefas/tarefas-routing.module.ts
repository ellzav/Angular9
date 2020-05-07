import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';

import { EditarTarefaComponent } from './editar';
import { TarefasRoutingComponent } from './tarefas-routing.component';
import {CadastrarTarefasComponent} from './cadastrar'
export const TarefasRoutes: Routes = [
	{
		path: 'tarefas',
		component: TarefasRoutingComponent,
		children: [
			{ 
				path: '', 
				component: ListarTarefaComponent 
			}, 
			{ 
				path: 'cadastrar', 
				component: CadastrarTarefasComponent 
			},
			{ 
				path: 'editar/:id', 
				component: EditarTarefaComponent 
			}
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(TarefasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TarefasRoutingModule {
}
