import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Contact } from './contact.entity';


@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact) private contactRepository: Repository<Contact>
    ){}

    findAll = async (): Promise<Contact[]> => {
        return await this.contactRepository.find();
    }

    create = async (contact: Contact): Promise<Contact> => {
        return await this.contactRepository.save(contact);
    }

}
