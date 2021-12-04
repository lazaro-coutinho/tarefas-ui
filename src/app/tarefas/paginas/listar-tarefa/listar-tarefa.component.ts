import { Tarefa } from './../../modelo/tarefa';
import { TarefaService } from './../../service/tarefa.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent {

  public tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.findAll();
  }

  findAll() {
    this.tarefaService.findAll()
      .subscribe(
        (tarefas: Tarefa[]) => this.tarefas = tarefas,
        (error) => alert(error.message)
      );
  }

}
