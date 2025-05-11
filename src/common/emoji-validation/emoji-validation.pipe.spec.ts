import { BadRequestException } from '@nestjs/common';
import { EmojiValidationPipe } from './emoji-validation.pipe';

describe('EmojiValidationPipe', () => {
  const emojiPipe = new EmojiValidationPipe();
  it('should be defined', () => {
    expect(emojiPipe).toBeDefined();
  });

  it('should return undefined if no value is passed', () => {
    expect(emojiPipe.transform(undefined)).toBeUndefined();
  });

  it('should throw a BadRequestException if the value is not a number', () => {
    expect(() => emojiPipe.transform('not-a-number')).toThrow(
      BadRequestException,
    );
  });

  it('should throw a BadRequestException if the value is less than 0', () => {
    expect(() => emojiPipe.transform(-1)).toThrow(BadRequestException);
  });

  it('should throw a BadRequestException if the value is greater than 9', () => {
    expect(() => emojiPipe.transform(10)).toThrow(BadRequestException);
  });

  it('it should return the respective string input as a number', () => {
    expect(emojiPipe.transform('3')).toEqual(3);
  });
});
