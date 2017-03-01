import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Flister } from "./flister.model";
import { ErrorService } from "../../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}

    signup(flister: Flister) {
        const body = JSON.stringify(flister);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/flister', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(flister: Flister) {
        const body = JSON.stringify(flister);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/flister/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}
