import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Agency from "../Agency/Agency.entity";
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

    @Column({ nullable: true })
    image: string;

    @Column({ type: "varchar", length: 255 , select: false })
    address: string;

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

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    owner: string;

    @OneToMany(() => User, (user) => user.savedProperties)
    savedBy: User[];

    @ManyToOne(() => Agency, (agency) => agency.properties)
    agency: Agency;
}
