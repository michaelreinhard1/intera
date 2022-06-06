import Agency from "../Agency/Agency.entity";

export interface UserBody {
    name: string;
    surname: string;
    email: string;
    password?: string;
    agency?: Agency;
    agencyId: number;
}
