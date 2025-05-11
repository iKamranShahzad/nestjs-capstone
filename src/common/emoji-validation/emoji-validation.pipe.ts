import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: number | string | undefined) {
    if (!value) {
      return;
    }
    const numValue = typeof value === 'string' ? Number(value) : value;
    if (isNaN(numValue)) {
      throw new BadRequestException('Validation failed: Not a number');
    }
    if (numValue < 0 || numValue > 9) {
      throw new BadRequestException('Validation failed: Out of range');
    }
    return numValue;
  }
}
