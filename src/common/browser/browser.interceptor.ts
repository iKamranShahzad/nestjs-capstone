import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/logger.service';

@Injectable()
export class BrowserInterceptor implements NestInterceptor {
  constructor(private readonly loggerService: LoggerService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();
    const userAgent = request.header('user-agent');
    const browserClient =
      userAgent !== undefined ? userAgent?.split(' ')[0] : 'unknown';
    request.headers.browser = browserClient;
    this.loggerService.log(
      `3) Browser-Agent Interceptor (Before Handler): ${request.headers.browser}`,
    );
    return next.handle();
  }
}
