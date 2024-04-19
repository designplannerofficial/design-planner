import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from "bcrypt";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profile?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    profile: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

UserSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

const User = mongoose.model<IUser>('User', UserSchema);

export async function createUser({
    username, email, password, profile
}: {
    username: string;
    email: string;
    password: string;
    profile?: string;
}): Promise<IUser> {
    const user = new User({
        username,
        email,
        password,
        profile
    });
    return await user.save();
}

export async function getUserByEmail({
    email
}: {
    email?: string
}): Promise<IUser | null> {
    return await User.findOne({ email });
}

export async function updatePassword({
    email,
    newPassword
}: {
    email: string;
    newPassword: string;
}){
    const user = await User.findOne({ email });
    if (!user) {
        return false;
    }
    user.password = newPassword;
    user.updatedAt = new Date();
    return await user.save();;
}

export async function deleteUserByEmail({
    email
}: {
    email: string
}){
    const result = await User.deleteOne({ email });
    return result.deletedCount !== 0;
}

export default User;
