import { NestFactory } from '@nestjs/core';
import { Message } from './interfaces/interfaces';
import { MessagesModule } from './messages/messages.module';

export const messages:Message[] = [
  { 'content': 'mensaje 1','id': '1' },
  { 'content': 'mensaje 2','id': '2' },
  { 'content': 'mensaje 3','id': '3' },
  { 'content': 'mensaje 4','id': '4' },
]


async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(3000);
}
bootstrap();
