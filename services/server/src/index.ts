import start from "./start";
import connectDb from "./config/db.config";

(
    async () => {
        try {
            start;
            connectDb();
        } catch (error) {
            console.log(`something went wrong during starting the app ${error}`);
            process.exit(1)
        }
    }
)()