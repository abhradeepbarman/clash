import pug from "pug";
import path from "path";
import { fileURLToPath } from "url";
export const formatError = (error) => {
    let errors = {};
    error.errors?.map((issue) => {
        errors[issue.path?.[0]] = issue.message;
    });
    return errors;
};
export const renderEmailPug = (fileName, payload) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const body = pug.renderFile(__dirname + `/views/emails/${fileName}.pug`, payload);
    return body;
};
