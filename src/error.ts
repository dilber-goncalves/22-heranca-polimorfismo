export class BadRequestError extends Error {
    readonly statusCode: number

    constructor(mensagem: string) {
        super(mensagem);
        this.statusCode = 400
    }
}

export class NotFoundError extends Error {
    readonly statusCode: number

    constructor(mensagem: string) {
        super(mensagem);
        this.statusCode = 404
    }
}