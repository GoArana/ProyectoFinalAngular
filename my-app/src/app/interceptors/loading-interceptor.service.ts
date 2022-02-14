import { Injectable } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loadingService.setLoading(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.loadingService.setLoading(false)));
  }
}
