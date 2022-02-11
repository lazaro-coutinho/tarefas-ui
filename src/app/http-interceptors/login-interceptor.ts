import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { LoginService } from "../login/service/login.service"
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        const token = this.loginService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token) {
            request = req.clone({
                headers: req.headers
                    .set('Authorization', `Bearer ${token}`)
                    .set('Content-Type', 'application/json')
                    .set('Access-Control-Allow-Origin', '*')
                    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
                    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            });
        }

        return next.handle(request)
            .pipe(
                catchError(this.handlerError)
            );
    }

    private handlerError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('Ocorreu um erro: ', error.error.message);
        } else {
            console.log(
                `Código do erro ${error.status}, ` +
                `Erro: ${JSON.stringify(error.error)}`
            );
        }
        return throwError('Ocorreu um erro! Tente novamente.');
    }

}