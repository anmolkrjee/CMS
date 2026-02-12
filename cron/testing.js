import cron from "node-cron";


export const testing = () => {
    console.log("Testing function schedule");
    cron.schedule("* * * * *", () => {
        console.log("Running a task every minute");
    });
}
 
export default testing;