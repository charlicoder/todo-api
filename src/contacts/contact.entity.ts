import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;
}
