import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import Property from "../Property/Property.entity";
import User from "../User/User.entity";

@Entity()
export default class Agency extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column( {nullable: true} )
    image: string;

    @Column()
    address: string;

    @Column()
    province: string;

    @Column()
    zip: number;

    @Column()
    city: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToMany(() => User, (user) => user.agency)
    users: User[];

    @OneToMany(() => Property, (property) => property.agency)
    properties: Property[];
}
