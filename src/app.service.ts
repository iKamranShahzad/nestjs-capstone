import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {}
  getEmoji(index?: number): string {
    this.loggerService.log('4) Route Handler: Getting Emoji');
    const emojis = this.getEmojis();
    const emojiIndex =
      index !== undefined ? index : Math.floor(Math.random() * emojis.length);
    return emojis[emojiIndex];
  }

  getEmojis(): string[] {
    return ['😀', '😂', '🥰', '😎', '🤔', '😢', '😡', '🥳', '😱', '🤗'];
  }
}
