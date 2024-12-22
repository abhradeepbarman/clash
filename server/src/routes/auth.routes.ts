import { Router, Request, Response } from "express";
import { registerSchema } from "../validators/auth.validators.js";
import { ZodError } from "zod";
import { formatError, renderEmailPug } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { emailQueue, emailQueueName } from "../jobs/EmailJob.js";
const router = Router();

router.post("/register", async (req: Request, res: any) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);

        let user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });

        if (user) {
            return res.status(422).json({
                errors: {
                    email: "User already exists",
                },
            });
        }

        const salt = await bcrypt.genSalt(10);
        payload.password = await bcrypt.hash(payload.password, salt);

        const token = await bcrypt.hash(uuidv4(), salt);
        const url = `${process.env.APP_URL}/verify-email?email=${payload.email}&token=${token}`;

        const emailBody = renderEmailPug("verify-email", {
            name: payload.name,
            url: url,
        });

        await emailQueue.add(emailQueueName, {
            to: payload.email,
            subject: "Email Verification - Clash",
            body: emailBody,
        });

        await prisma.user.create({
            data: {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                email_verify_token: token,
            },
        });

        // by default response sends 200 status
        return res.json({
            message:
                "Please check your Email! We have sent you a verification email.",
        });
    } catch (error) {
        console.log("error", error);
        if (error instanceof ZodError) {
            const errors = formatError(error);
            return res.status(422).json({
                message: "Invalid data",
                errors,
            });
        }

        return res.status(500).json({
            message: "Something went wrong. Please Try again!",
        });
    }
});

export default router;
