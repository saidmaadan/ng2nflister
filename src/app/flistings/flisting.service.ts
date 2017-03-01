import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Flisting } from "./flisting.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class FlistingService {
    private flistings: Flisting[] = [];
    flistingIsEdit = new EventEmitter<Flisting>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addFlisting(flisting: Flisting) {
        const body = JSON.stringify(flisting);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/flisting' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const flisting = new Flisting(
                    result.obj.title,
                    result.obj.description,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.flistings.push(flisting);
                return flisting;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getFlistings() {
        return this.http.get('http://localhost:3000/flisting')
            .map((response: Response) => {
                const flistings = response.json().obj;
                let transformedFlistings: Flisting[] = [];
                for (let flisting of flistings) {
                    transformedFlistings.push(new Flisting(
                        flisting.title,
                        flisting.description,
                        flisting.user.firstName,
                        flisting._id,
                        flisting.user._id)
                    );
                }
                this.flistings = transformedFlistings;
                return transformedFlistings;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editFlisting(flisting: Flisting) {
        this.flistingIsEdit.emit(flisting);
    }

    updateFlisting(flisting: Flisting) {
        const body = JSON.stringify(flisting);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/flisting/' + flisting.flistingId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteFlisting(flisting: Flisting) {
        this.flistings.splice(this.flistings.indexOf(flisting), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/flisting/' + flisting.flistingId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}
