import BaseError from "./BaseError";
export class BadRequestError extends BaseError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
    }
}