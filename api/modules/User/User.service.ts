import User from "./User.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../database/DataSource";

export default class UserService {
    private repository: Repository<User>;

    constructor() {
        const repository = AppDataSource.getRepository(User);
        this.repository = repository;
    }

    all = async () => {
        // don't show password
        const users = await this.repository.find();
        return users;
    };

    findOne = async (id: number) => {
        const user = await this.repository.findOneBy({ id });
        return user;
    };

    findOneBy = async (options: object) => {
        const user = await this.repository.findOneBy(options);
        return user;
    };

    findByEmailWithPassword = async (email: string) => {
        const user = await this.repository
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .select("user.password")
            .getOne();
        return user;
    };

    create = async (body) => {
        const user = await this.repository.save(this.repository.create(body));
        return user;
    };

    update = async (id: number, body) => {
        let user = await this.findOne(id);
        if (user) {
            user = await this.repository.save({ ...user, ...body });
        }
        return user;
    };

    delete = async (id: number) => {
        let user = await this.findOne(id);
        if (user) {
            await this.repository.softDelete({ id });
        }
        return user;
    };
}
