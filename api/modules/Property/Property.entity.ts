import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import User from "../User/User.entity";
// import Project from "../Project/Project.entity";

@Entity()
export default class Property extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255 })
    description: string;

    @Column({ type: "varchar", length: 255 })
    image: string;

    @Column({ type: "varchar", length: 255 , select: false })
    adress: string;

    @Column({ type: "varchar", length: 255})
    city: string;

    @Column({ type: "int"})
    zip: number;

    @Column({ type: "varchar", length: 255})
    province: string;

    @Column({ type: "varchar", length: 255 })
    type: string;

    @Column({ type: "varchar", length: 255 })
    payment: string;

    @Column({ type: "int" })
    price: number;

    @Column({ type: "int" })
    rooms: number;

    @Column({ type: "int" })
    bedrooms: number;

    @Column({ type: "int" })
    bathrooms: number;

    @Column({ type: "int" })
    area: number;

    @Column({ type: "int" })
    floor: number;

    @Column({ type: "int" })
    year: number;

    @Column({ type: "boolean" })
    balcony: boolean;

    @Column({ type: "boolean" })
    elevator: boolean;

    @Column({ type: "boolean" })
    parking: boolean;

    @Column({ type: "varchar", length: 255 })
    phone: string;

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255 })
    owner: string;

    @OneToMany(() => User, (user) => user.savedProperties)
    savedBy: User[];

}
