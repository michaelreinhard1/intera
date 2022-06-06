import { compare, hash } from "bcrypt";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { UserRole } from "./User.constants";
import { IsDefined, IsEmail } from "class-validator";
import Property from "../Property/Property.entity";
import Agency from "../Agency/Agency.entity";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined({ always: true })
    @Column()
    name: string;

    @IsDefined({ always: true })
    @Column()
    surname: string;

    @IsDefined({ always: true })
    @IsEmail(undefined, { always: true })
    @Column({ unique: true })
    email: string;

    @IsDefined({groups: ["create"]})
    @Column({ select: false })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.User,
    })
    role: UserRole;

    @ManyToMany(() => Property, (property) => property.savedBy)
    savedProperties: Property[];

    @ManyToOne(() => Agency, (agency) => agency.users)
    agency: Agency;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            this.password = await hash(this.password, 10);
        }
    }

    async checkPassword(passwordToCheck: string) {
        return await compare(passwordToCheck, this.password);
    }

    isAdmin() {
        return this.role === UserRole.Admin;
    }

}