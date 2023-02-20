export interface IUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    image?: string;
    birthDate?: string;
    age?: number;
    gender?: string;
    email?: string;
    university?: string;
    phone?: string;
    hair?: {
        color?: string;
        type?: string;
    };
    address?: {
        address?: string;
        city?: string;
        coordinates?: {
            lat?: number;
            lng?: number;
        };
        postalCode?: number;
        state?: string;
    };
}
//# sourceMappingURL=user-info.model.d.ts.map