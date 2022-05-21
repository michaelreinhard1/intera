import { Repository } from "typeorm";

import { AppDataSource } from "../../database/DataSource";
import Property from "./Property.entity";
import { PropertyBody } from "./Property.types";

export default class PropertyService {
    private repository: Repository<Property>;

    constructor() {
        this.repository = AppDataSource.getRepository(Property);
    }

    all = async () => {
        const properties = await this.repository.find();
        return properties;
    };

    // get all properties including location column
    allWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.location")
            .getMany();
        return properties;
    };

    findOne = async (id: number) => {
        const client = await this.repository.findOneBy({ id });
        return client;
    };


    create = async (body: PropertyBody) => {
        const client = await this.repository.save(this.repository.create(body));
        return client;
    };

    update = async (id: number, body: PropertyBody) => {
        let client = await this.findOne(id);
        if (client) {
            client = await this.repository.save({ ...client, ...body });
        }
        return client;
    };

    delete = async (id: number) => {
        let client = await this.findOne(id);
        if (client) {
            await this.repository.softDelete({ id });
        }
        return client;
    };
}
