import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './modelo/usuario';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario: Usuario = {
    login: '',
    senha: ''
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  entrar() {
    this.loginService.entrar(this.usuario)
      .subscribe(
        (response) => {
          window.localStorage.setItem('token', 'Bearer ' + response.Authorization);
          this.router.navigate(['']);
        },
        (e) => console.log(e)
      );
  }
  
}
