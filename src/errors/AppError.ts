import { Request, Response } from "express";


export class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {  //default value =>  statusCode = 400, if not equal a 400 code throw anoter number
        this.message = message;
        this.statusCode = statusCode;
    }

}