import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import pug from "pug";
import { sendEmail } from "./config/mail.js";
import Routes from "./routes/index.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app: Application = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Set view engine
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "./views"));

// * Routes
app.use(Routes);

// Queues
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";

app.get("/", async (req: Request, res: any) => {
    // const body = pug.renderFile(__dirname + "/views/welcome.pug");
    // await emailQueue.add(emailQueueName, {
    //     to: "dedogeg586@kelenson.com",
    //     subject: "Testing Testing 1234",
    //     body: body,
    // });
    // return res.json({
    //     message: "Email sent successfully",
    // });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
