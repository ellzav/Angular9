import { Routes } from '@angular/router';

import { EditarTarefaComponent } from './editar';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

export const TarefaRoutes: Routes=[

    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path:'tarefas/listar',
        component:ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
    
]