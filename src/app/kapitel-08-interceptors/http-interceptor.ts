import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // (1) Modifizieren der HTTP-Anfrage auf globaler Ebene.
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer your-token-here`,
      },
    });

    console.log('Intercepted Request: ', clonedRequest);

    // (4) Übergabe des Requests an den HTTP-Handler.
    return next.handle(clonedRequest);
  }
}
