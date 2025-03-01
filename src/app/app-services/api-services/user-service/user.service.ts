import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { UserProfileInf } from "./user-service.interface";
import { environment } from "@environments/environment";

const ENV_LOCAL = "dev";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(readonly http: HttpClient){}

    getUserProfile(user: string): Observable<UserProfileInf> {
        
        let apiUrl = `${environment.apiUrl}/user-service/v1/user-profiles?user-identifier=${user}`;
        if(environment.envName === ENV_LOCAL){
            apiUrl = `${environment.apiUrl}/userDetails`
        }

        return this.http.get<UserProfileInf>(
            apiUrl
        ).pipe(catchError((error: () => any) => throwError(error)));
    }

}