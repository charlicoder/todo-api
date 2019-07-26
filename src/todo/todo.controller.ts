import { Get, Controller } from '@nestjs/common';

@Controller('/api/todo')
export class TodoController {
    @Get()
    getAllTodo() {

    }
}
