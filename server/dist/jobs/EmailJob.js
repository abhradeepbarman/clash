import { Queue, Worker } from "bullmq";
import { defaultQueueOption, redisConnection } from "../config/queue.js";
import { sendEmail } from "../config/mail.js";
export const emailQueueName = "emailQueue";
export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueOption,
});
// * Worker
export const queueWorker = new Worker(emailQueueName, async (job) => {
    const data = job.data;
    await sendEmail(data.to, data.subject, data.body);
}, {
    connection: redisConnection,
});
