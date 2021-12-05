import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../modelo/tarefa';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent {

  @Input() tarefa: Tarefa = <Tarefa>{};
  @Output() tarefaOutput: EventEmitter<Tarefa> = new EventEmitter();

  onSubmit() {
    this.tarefaOutput.emit(this.tarefa);
  }

}
