import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TodoModule } from './todo/todo.module';
import { DogsModule } from './dogs/dogs.module';
import { ContactsModule } from './contacts/contacts.module';



@Module({
    imports: [
        TypeOrmModule.forRoot(),
        // TodoModule,
        DogsModule,
        ContactsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
