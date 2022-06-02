import "reflect-metadata";
import { DataSource } from "typeorm";
import Agency from "../modules/Agency/Agency.entity";
import Client from "../modules/Client/Client.entity";
import Project from "../modules/Project/Project.entity";
import Property from "../modules/Property/Property.entity";
import User from "../modules/User/User.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Client, User, Project, Property, Agency],
    migrations: [],
    subscribers: [],
});
