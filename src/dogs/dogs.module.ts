import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dog } from './dogs.entity';
import { DogRepository } from './dogs.repository';
import { DogsController } from './dogs.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Dog, DogRepository])
    ],
    controllers: [DogsController]
})
export class DogsModule {}
