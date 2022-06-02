import Property from "../Property/Property.entity";
import User from "../User/User.entity";

export interface AgencyBody {
    name: string;
    description: string;
    image: string;
    adress: string;
    province: string;
    agents: User[];
    properties: Property[];
}