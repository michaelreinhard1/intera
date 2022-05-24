import { compare, hash } from "bcrypt";
import { BeforeInsert, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { UserRole } from "./User.constants";
import { IsDefined, IsEmail } from "class-validator";
import Property from "../Property/Property.entity";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined()
    @Column()
    name: string;

    @IsDefined()
    @Column()
    surname: string;

    @IsDefined()
    @IsEmail()
    @Column({ unique: true })
    email: string;

    @IsDefined()
    @Column({ select: false })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.User,
    })
    role: UserRole;

    // Column called saves to save the user's saved properties
    @ManyToMany(() => Property, (property) => property.savedBy)
    savedProperties: Property[];


    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await hash(this.password, 10);
        }
    }

    async checkPassword(passwordToCheck: string) {
        return await compare(passwordToCheck, this.password);
    }
}