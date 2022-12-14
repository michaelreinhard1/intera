import Agency from "../Agency/Agency.entity";

export interface PropertyBody {
    price: number;
    name: string;
    description: string;
    image?: string | null;
    type: string;
    payment: string;
    rooms: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    floor: number;
    year: number;
    phone: string;
    email: string;
    owner: string;
    address: string;
    city: string;
    province: string;
    zip: number;
    agency?: Agency;
    agencyId: number;
}
