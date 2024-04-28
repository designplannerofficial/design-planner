import mongoose, { Schema } from "mongoose";

export interface ITable extends Document {
    _id?: mongoose.Types.ObjectId;
    name: string;
    fields: Record<string, string>[];
}

const fieldSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['String', 'Number', 'Boolean', 'Array', 'Object', 'ObjectId', 'Date', 'Timestamp'],
        required: true
    },
    default: {
        type: String,
    },
    unique: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    indexed: {
        type: Boolean,
        default: false
    },
    reference: {
        isReferenced: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            enum: ['one-to-one', 'one-to-many', 'many-to-one', 'many-to-many']
        },
        referencedTable: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tables'
        }
    }
})

const tableSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fields: [fieldSchema]
});

const Table = mongoose.model<ITable>('tables', tableSchema);
export default Table;