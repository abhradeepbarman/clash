import { ZodError } from "zod";
import pug from "pug";
import path from "path";
import { fileURLToPath } from "url";

export const formatError = (error: ZodError): any => {
    let errors: any = {};

    error.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message;
    });

    return errors;
};

export const renderEmailPug = (fileName: string, payload: any): string => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const body: string = pug.renderFile(
        __dirname + `/views/emails/${fileName}.pug`,
        payload
    );
    return body;
};
