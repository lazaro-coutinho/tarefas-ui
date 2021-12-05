import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { ListarTarefaComponent } from './paginas/listar-tarefa/listar-tarefa.component';
import { CriarTarefaComponent } from './paginas/criar-tarefa/criar-tarefa.component';
import { TarefaFormComponent } from './shared/tarefa-form/tarefa-form.component';
import { EditarTarefaComponent } from './paginas/editar-tarefa/editar-tarefa.component';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CriarTarefaComponent,
    TarefaFormComponent,
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FormsModule
  ]
})
export class TarefasModule { }
