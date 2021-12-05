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

  remove(tarefa: Tarefa) {
    const remover = confirm('Tem certeza de que deseja remover esta Tarefa?');
    if (remover) {
      this.tarefaService.remove(tarefa)
        .subscribe(
          () => {
            this.findAll();
            alert('Tarefa removida com sucesso');
          },
          (error) => alert(error.message)
        );
    }
  }

  finalize(tarefa: Tarefa) {
    this.tarefaService.finalize(tarefa)
      .subscribe(
        () => {
          this.findAll();
          alert('Tarefa finalizada com sucesso');
        },
        (error) => alert(error.message)
      );
  }

  findByName(e: any) {
    if (e.keyCode === 13) {
      const nome = e.target.value;
      this.tarefaService.findByName(nome)
        .subscribe(
          (tarefas: Tarefa[]) => this.tarefas = tarefas,
          (error) => alert(error.message)
        );
    }
  }

}
