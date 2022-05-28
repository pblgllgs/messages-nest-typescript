import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from 'src/interfaces/interfaces';
import { messages } from 'src/main';

@Controller('/messages')
export class MessagesController {

    @Get()
    listMessages(): Message[] {
        return messages
    }

    @Post()
    createMessage(@Body() body: Message) {
        const message = {
            content: body.content,
            id: body.id,
        }
        messages.push(message)
        return message
    }

    @Get('/:id')
    getMessage(@Param('id') id: string): Message {
        const message = messages.find(message => message.id === id)
        return message
    }

    @Delete('/:id')
    deleteMessage(@Param('id') id: string) {
        const message = messages.find(message => message.id === id)
        if (!message) {
            return {
                message:
                    'deleted'
            }
        }
        messages.splice(messages.indexOf(message), 1)
        return {
            message: 'Mensaje ' + id + ' borrado'
        }
    }

    @Put('/:id')
    updateMessage(@Param('id') id: string, @Body() body: Message) {
        const message = messages.find(message => message.id === id)
        if (!message) {
            return {
                message: 'not found'
            }
        }
        message.content = body.content
        return message
    }
}
