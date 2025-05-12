import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(`[LOG] ${new Date().toISOString()} - ${message}`);
  }

  error(message: string) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }

  warn(message: string) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  debug(message: string) {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  }
}
