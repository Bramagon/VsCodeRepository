import { UserService } from 'src/app/services/UserService';
import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: UserService) {
  }
  


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'WEB-API-key': '121243-fsdtgni21-21inia-123409ad-12859hawfdsd-195h4890wth-128h'
    });


    request = request.clone({headers});
    return next.handle(request);
  }
}
