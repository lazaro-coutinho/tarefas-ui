import { EditarTarefaComponent } from './paginas/editar-tarefa/editar-tarefa.component';
import { CriarTarefaComponent } from './paginas/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './paginas/listar-tarefa/listar-tarefa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListarTarefaComponent },
  { path: 'criar', component: CriarTarefaComponent },
  { path: 'editar/:id', component: EditarTarefaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
