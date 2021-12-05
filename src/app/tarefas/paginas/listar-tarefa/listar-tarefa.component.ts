import { Tarefa } from './../../modelo/tarefa';
import { TarefaService } from './../../service/tarefa.service';
import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent {
  public tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.findAll();
  }

  findAll() {
    this.tarefaService.findAll().subscribe(
      (tarefas: Tarefa[]) => (this.tarefas = tarefas),
      (error) => alert(error.message)
    );
  }

  remove(tarefa: Tarefa) {
    const remover = confirm('Tem certeza de que deseja remover esta Tarefa?');
    if (remover) {
      this.tarefaService.remove(tarefa).subscribe(
        () => {
          this.findAll();
          alert('Tarefa removida com sucesso');
        },
        (error) => alert(error.message)
      );
    }
  }

  finalize(tarefa: Tarefa) {
    this.tarefaService.finalize(tarefa).subscribe(
      () => {
        this.findAll();
        alert('Tarefa finalizada com sucesso');
      },
      (error) => alert(error.message)
    );
  }

  arquivar(tarefa: Tarefa) {
    const arquivar = confirm('Tem certeza de que deseja arquivar esta Tarefa?');
    if (arquivar) {
      this.tarefaService.arquivar(tarefa)
        .subscribe(
          () => {
            this.findAll();
            alert('Tarefa arquivada com sucesso');
          },
          (error) => {
            alert('Erro ao arquivar tarefa');
            console.log(error);
          }
      );
    }
  }

  search(e: any) {
    const nome = e.target.value;

    if (nome !== '') {
      this.showSearchBtn();
    } else {
      this.hideSearchBtn();
    }

    if (e.keyCode === 13) {
      this.tarefaService.findByName(nome).subscribe(
        (tarefas: Tarefa[]) => (this.tarefas = tarefas),
        (error) => alert(error.message)
      );
    }
  }

  cleanSearch(e: any) {
    this.cleanInputSearch(e);
    this.findAll();
  }

  cleanInputSearch(e: any) {
    const elementIcon = e.target.parentElement;
    const elementInputSearch = elementIcon.children[0];
    elementInputSearch.value = '';
    elementInputSearch.focus();
    this.hideSearchBtn();
  }

  hideSearchBtn() {
    const cleanSearchBtn = document.querySelector('.clean-search-btn');
    cleanSearchBtn?.classList.remove('visible');
  }

  showSearchBtn() {
    const cleanSearchBtn = document.querySelector('.clean-search-btn');
    cleanSearchBtn?.classList.add('visible');
  }
}
