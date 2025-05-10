import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('AuthGuard: Checking Authentication');
    const request: Request = context.switchToHttp().getRequest();
    const apiKey = request.header('x-api-key');
    if (apiKey !== 'SECRET') {
      console.log('AuthGuard Failed');
      return false;
    }
    console.log('AuthGuard Passed');
    return true;
  }
}
