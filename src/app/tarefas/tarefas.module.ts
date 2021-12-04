import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { ListarTarefaComponent } from './paginas/listar-tarefa/listar-tarefa.component';


@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule
  ]
})
export class TarefasModule { }
