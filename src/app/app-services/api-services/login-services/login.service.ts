
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

import { LoginDetailsInf } from "./login-service.interface";
import { environment } from "@environments/environment";

const ENV_LOCAL = "dev";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(readonly http: HttpClient){}

    getLoginDetails(user: string): Observable<LoginDetailsInf> {
        
        let apiUrl = `${environment.apiUrl}/login-service/v1/login-details?user-identifier=${user}`;
        if(environment.envName === ENV_LOCAL){
            apiUrl = `${environment.apiUrl}/loginDetails`
        }

        return this.http.get<LoginDetailsInf>(
            apiUrl
        ).pipe(catchError((error: () => any) => throwError(error)));
    }

}