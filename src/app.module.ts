import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/logger/logger.middleware';
import { LoggerService } from './logger.service';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './common/auth/auth.guard';
import { BrowserInterceptor } from './common/browser/browser.interceptor';
import { TransformResponseInterceptor } from './common/transform-response/transform-response.interceptor';
import { AllExceptionsFilter } from './common/all-exceptions/all-exceptions.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // global providers
    // Global providers are available in all modules
    // and can be injected into any provider or controller
    // without needing to import the module that provides them.
    // This is useful for services that are used throughout the application,
    // such as logging, configuration, and authentication services.
    // In this case, we are using the LoggerService as a global provider.
    // This means that we can inject the LoggerService into any provider or controller
    // without needing to import the module that provides it.
    AppService,
    LoggerService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: BrowserInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
