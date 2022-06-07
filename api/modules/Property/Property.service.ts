import { Repository } from "typeorm";

import { AppDataSource } from "../../database/DataSource";
import { TransactionTypes } from "./Property.constants";
import Property from "./Property.entity";
import { PropertyBody } from "./Property.types";

export default class PropertyService {
    private repository: Repository<Property>;

    constructor() {
        this.repository = AppDataSource.getRepository(Property);
    }

    all = async () => {
        const properties = await this.repository.find(
            { relations: ["agency"] }
        );
        return properties;
    };

    allByAgency = async (id: number) => {
        const properties = await this.repository.find({
            relations: ["agency"],
            where: { agency: { id } }
        });
        return properties;
    };

    allRent = async () => {
        const properties = await this.repository.find({
            where: {
                payment: TransactionTypes.Rent
            }
        });
        return properties;
    };

    allBuy = async () => {
        const properties = await this.repository.find({
            where: {
                payment: TransactionTypes.Buy
            }
        });
        return properties;
    };

    allWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.address")
            .getMany();
        return properties;
    };

    allRentWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.address")
            .where("property.payment = :payment", { payment: TransactionTypes.Rent })
            .getMany();
        return properties;
    };

    allBuyWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.address")
            .where("property.payment = :payment", { payment: TransactionTypes.Buy })
            .getMany();
        return properties;
    };

    findOne = async (id: number) => {
        const property = await this.repository.findOneBy({ id });
        return property;
    };

    findOneBy = async (options: object) => {
        const property = await this.repository.findOneBy(options);
        return property;
    }

    findOneWithLocation = async (id: number) => {
        const property = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.address")
            .where("property.id = :id", { id })
            .getOne();
        return property;
    };

    findPropertiesByAgency = async (id: number) => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .addSelect("property.address")
            .where("property.agency = :agency", { agency: id })
            .getMany();
        return properties;
    };

    create = async (body: PropertyBody) => {
        const property = await this.findOneBy({ address: body.address });
        if (property) {
            return console.error("Property already exists");
        }
        const newProperty = await this.repository.save(
            this.repository.create(body)
        );
        return newProperty;
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
