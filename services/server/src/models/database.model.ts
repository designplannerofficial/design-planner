import mongoose, { Document, Schema } from "mongoose";

export interface IDatabase extends Document {
    _id?: mongoose.Types.ObjectId;
    name: string;
    type: string;
    tables: Record<string, string>[];
}

const databaseSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['sql', 'nosql'],
        required: true
    },
    tables: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'databases'
    }]
});

const Database = mongoose.model('databases', databaseSchema);
export default Database;