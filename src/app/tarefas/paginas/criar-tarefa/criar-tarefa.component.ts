import { Tarefa } from './../../modelo/tarefa';
import { TarefaService } from './../../service/tarefa.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent {

  constructor(private tarefaService: TarefaService, private router: Router) { }

  save(tarefa: Tarefa) {
    this.tarefaService.save(tarefa)
      .subscribe(
        () => {
          this.router.navigateByUrl('/tarefas');
          alert('Tarefa criada com sucesso');
        },
        (error) => alert(error.message)
      );
  }

}
