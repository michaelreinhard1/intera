import Property from "../Property/Property.entity";
import User from "../User/User.entity";

export interface AgencyBody {
    name: string;
    description: string;
    image: string;
    address: string;
    city: string;
    email: string;
    phone: string;
    zip: number;
    province: string;
}