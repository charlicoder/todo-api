import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactService: ContactsService) {}

    @Get()
    index(): Promise<Contact[]> {
        return this.contactService.findAll();
        // return 'This action will return contacts';
    }

    @Post('create')
    async addContact(@Body() contactData: Contact): Promise<any> {
        return this.contactService.create(contactData);
    }
}
