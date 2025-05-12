import { LoggerService } from '../../logger.service';
import { LoggerMiddleware } from './logger.middleware';

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware(new LoggerService())).toBeDefined();
  });
});
