import { connect } from "mongoose";

const connectDb = () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || ''
        connect(MONGO_URI)
        console.log(`db connected successfully`);
    } catch (error) {
        console.log(`something went wrong during connecting with db ${error}`);
        process.exit(1)
    }
}

export default connectDb;