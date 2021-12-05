import { environment } from './../../../environments/environment';
import { Tarefa } from './../modelo/tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private httpClient: HttpClient) { }

  save(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${environment.apiUrl}/tarefas`;
    return this.httpClient.post<Tarefa>(url, tarefa);
  }

  update(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${environment.apiUrl}/tarefas/${tarefa.id}`;
    return this.httpClient.put<Tarefa>(url, tarefa);
  }

  remove(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${environment.apiUrl}/tarefas/${tarefa.id}`;
    return this.httpClient.delete<Tarefa>(url);
  }

  findById(id: number): Observable<Tarefa> {
    const url = `${environment.apiUrl}/tarefas/${id}`;
    return this.httpClient.get<Tarefa>(url);
  }

  findAll(): Observable<Tarefa[]> {
    const url = `${environment.apiUrl}/tarefas`;
    return this.httpClient.get<Tarefa[]>(url);
  }

}
