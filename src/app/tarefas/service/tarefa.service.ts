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

  findAll(): Observable<Tarefa[]> {
    const url = `${environment.apiUrl}/tarefas`;
    return this.httpClient.get<Tarefa[]>(url);
  }
}
