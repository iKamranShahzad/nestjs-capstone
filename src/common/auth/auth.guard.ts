import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly loggerService: LoggerService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.loggerService.log('2) AuthGuard: Checking Authentication');
    const request: Request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    if (apiKey !== 'SECRET') {
      this.loggerService.error('AuthGuard Failed');
      return false;
    }
    this.loggerService.log('AuthGuard Passed');
    return true;
  }
}
