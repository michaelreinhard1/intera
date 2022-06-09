import { Repository } from "typeorm";

import { AppDataSource } from "../../database/DataSource";
import { BadRequestError } from "../../errors/BadRequestError";
import { TransactionTypes } from "./Property.constants";
import Property from "./Property.entity";
import { PropertyBody } from "./Property.types";

export default class PropertyService {
    private repository: Repository<Property>;

    constructor() {
        this.repository = AppDataSource.getRepository(Property);
    }

    all = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .leftJoinAndSelect("property.agency", "agency")
            .addSelect("property.address")
            .getMany();
        return properties;
    };

    allByAgency = async (id: number) => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .where("property.agencyId = :id", { id })
            .leftJoinAndSelect("property.agency", "agency")
            .addSelect("property.address")
            .getMany();
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
            .leftJoinAndSelect("property.agency", "agency")
            .addSelect("property.address")
            .getMany();
        return properties;
    };

    allRentWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .leftJoinAndSelect("property.agency", "agency")
            .addSelect("property.address")
            .where("property.payment = :payment", { payment: TransactionTypes.Rent })
            .getMany();
        return properties;
    };

    allBuyWithLocation = async () => {
        const properties = await this.repository
            .createQueryBuilder("property")
            .select("property")
            .leftJoinAndSelect("property.agency", "agency")
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
        const property = await this.findOneBy({ id });
        if (!property) {
            return null;
        }
        const propertyWithLocation = await this.repository
            .createQueryBuilder("property")
            .where("property.id = :id", { id })
            .select("property")
            .leftJoinAndSelect("property.agency", "agency")
            .addSelect("property.address")
            .getOne();
        return propertyWithLocation;
    };

    findByAgency = async (agencyId: number, propertyId: number) => {
        const property = await this.repository
            .createQueryBuilder("property")
            .where("property.agencyId = :agencyId", { agencyId })
            .andWhere("property.id = :propertyId", { propertyId })
            .leftJoinAndSelect("property.agency", "agency")
            .addSelect("property.address")
            .getOne();
        return property;
    }

    updateByAgency = async (agencyId: number, propertyId: number, body: PropertyBody) => {
        const property = await this.findByAgency(agencyId, propertyId);
        console.log(property);

        if (!property) {
            return null;
        }
        console.log(property);

        const updatedProperty = await this.repository.save({
            ...property,
            ...body
        });
        return updatedProperty;
    }
    deleteByAgency = async (agencyId: number, propertyId: number) => {
        const property = await this.findByAgency(agencyId, propertyId);
        if (!property) {
            return null;
        }
        const deletedProperty = await this.repository.remove(property);
        return deletedProperty;
    }

    createByAgency = async (agencyId: number, body: PropertyBody) => {
        const property = await this.repository.save({
            ...body,
            agencyId
        });
        return property;
    }

    create = async (body: PropertyBody) => {
        const property = await this.findOneBy({ address: body.address });
        if (property) {
            throw new BadRequestError('Address already exists', 400);
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

    // updateByAgency = async (id: number, body: PropertyBody) => {
    //     let property = await this.findOneByAgency(id, body);
    //     if (property) {
    //         property = await this.repository.save({ ...property, ...body });
    //     }
    //     return property;
    // }

    delete = async (id: number) => {
        let property = await this.findOne(id);
        if (property) {
            await this.repository.softDelete({ id });
        }
        return property;
    };
}
