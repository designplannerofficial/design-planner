export abstract class CustomError extends Error {
    abstract code: number;
    abstract message: string;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
};

export class badRequestError extends CustomError {
    public code = 400;
    public message = "Bad Request" ;
    constructor() {
        super('Bad Request');
        Object.setPrototypeOf(this, badRequestError.prototype);
    };
};


export class forbiddenError extends CustomError {
    public code = 404;
    public message = "Forbidden" ;
    constructor() {
        super('Forbidden');
        Object.setPrototypeOf(this, forbiddenError.prototype);
    };
};

export class NotFoundError extends CustomError {
    public code = 404;
    public message = "Page not found" ;
    constructor() {
        super('Page not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    };
};

export class UnAuthorizedError extends CustomError {
    public code = 401;
    public message = "UnAuthorized" ;
    constructor() {
        super('UnAuthorized');
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
    };
};

export class validationError extends CustomError {
    public code = 400;
    public message = "Validation Failed" ;
    constructor(message?: string) {
        super(message ?? "Validation Failed");
        this.message = message ?? "Validation Failed";
        Object.setPrototypeOf(this, validationError.prototype);
    };
};