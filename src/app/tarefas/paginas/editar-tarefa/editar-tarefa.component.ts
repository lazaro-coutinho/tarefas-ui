import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from './../../service/tarefa.service';
import { Tarefa } from './../../modelo/tarefa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent {

  public tarefa: Tarefa = <Tarefa>{};

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private activetedRouter: ActivatedRoute
  ) {
    const id = this.activetedRouter.snapshot.params.id;
    this.findById(id);
  }

  update(tarefa: Tarefa) {
    this.tarefaService.update(tarefa)
      .subscribe(
        () => {
          this.router.navigateByUrl('/tarefas');
          alert('Tarefa editada com sucesso');
        },
        (error) => alert(error.message)
      );
  }

  findById(id: number) {
    this.tarefaService.findById(id)
      .subscribe(
        (tarefa: Tarefa) => this.tarefa = tarefa,
        (error) => alert(error.message)
      );
  }

}
