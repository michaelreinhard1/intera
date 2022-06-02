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

    @Column()
    image: string;

    @Column()
    adress: string;

    @Column()
    province: string;

    @OneToMany(() => User, (user) => user.agency)
    agents: User[];

    @OneToMany(() => Property, (property) => property.agency)
    properties: Property[];
}
