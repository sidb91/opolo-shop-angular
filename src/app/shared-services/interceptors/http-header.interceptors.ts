import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

    constructor(){}

    intercept(request: HttpRequest<unknown>, 
        next: HttpHandler): Observable<HttpEvent<unknown>> {

        let customReq: HttpRequest<any>;
        customReq = request.clone({
            setHeaders:{
                'X-Permitted-Cross-Domain-Policies': 'none',
                'X-Content-Type-Options': 'nosniff',
                'X-FRAME-OPTIONS': 'DENY',
                'X-XSS-Protection': '1; mode=block',
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
                'Referrer-Policy': 'no-referrer-when-downgrade',
                'Expect-CT': 'max-age=86400, enforce',
                'http-reuse': 'never',
                'Feature-Policy': "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none' ",
                'Access-Control-Allow-Origin': '*'
            }
        });
        
        return next.handle(customReq);
    }
}