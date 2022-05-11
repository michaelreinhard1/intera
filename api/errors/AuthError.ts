import BaseError from "./BaseError";

export default class AuthError extends BaseError {
    constructor() {
        super("Unauthorized", 401);
    }

    // Return 'email already exists' error

    public static emailAlreadyExists(): AuthError {
        return new AuthError();
    }
}
