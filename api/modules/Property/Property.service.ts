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

    allRent = async () => {
        const properties = await this.repository.find({
            where: {
                payment: "rent"
            }
        });
        return properties;
    };

    allBuy = async () => {
        const properties = await this.repository.find({
            where: {
                payment: "buy"
            }
        });
        return properties;
    };

    // get all properties including location column
    allWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.adress")
            .getMany();
        return properties;
    };

    allRentWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.adress")
            .where("property.payment = :payment", { payment: "rent" })
            .getMany();
        return properties;
    };

    allBuyWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.adress")
            .where("property.payment = :payment", { payment: "buy" })
            .getMany();
        return properties;
    };

    findOne = async (id: number) => {
        const property = await this.repository.findOneBy({ id });
        return property;
    };

    findOneWithLocation = async (id: number) => {
        const property = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.adress")
            .where("property.id = :id", { id })
            .getOne();
        return property;
    };

    findPropertiesByAgency = async (id: number) => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.adress")
            .where("property.agency = :agency", { agency: id })
            .getMany();
        return properties;
    };

    create = async (body: PropertyBody) => {
        const property = await this.repository.save(this.repository.create(body));
        return property;
    };

    update = async (id: number, body: PropertyBody) => {
        let property = await this.findOne(id);
        if (property) {
            property = await this.repository.save({ ...property, ...body });
        }
        return property;
    };

    delete = async (id: number) => {
        let property = await this.findOne(id);
        if (property) {
            await this.repository.softDelete({ id });
        }
        return property;
    };
}
