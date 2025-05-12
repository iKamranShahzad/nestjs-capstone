import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { map, Observable } from 'rxjs';
import { LoggerService } from '../../logger.service';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  constructor(private readonly loggerService: LoggerService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: Response) => {
        this.loggerService.log('5) Transforming Response');
        return {
          data,
        };
      }),
    );
  }
}
