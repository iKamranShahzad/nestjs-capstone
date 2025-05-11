import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { EmojiValidationPipe } from './common/emoji-validation/emoji-validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('index', EmojiValidationPipe) index?: number): string {
    return this.appService.getEmoji(index);
  }
}
