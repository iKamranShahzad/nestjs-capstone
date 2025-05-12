import { LoggerService } from '../../logger.service';
import { TransformResponseInterceptor } from './transform-response.interceptor';

describe('TransformResponseInterceptor', () => {
  it('should be defined', () => {
    expect(new TransformResponseInterceptor(new LoggerService())).toBeDefined();
  });
});
