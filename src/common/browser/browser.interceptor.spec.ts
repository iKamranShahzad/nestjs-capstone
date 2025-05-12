import { LoggerService } from '../../logger.service';
import { BrowserInterceptor } from './browser.interceptor';

describe('BrowserInterceptor', () => {
  it('should be defined', () => {
    expect(new BrowserInterceptor(new LoggerService())).toBeDefined();
  });
});
