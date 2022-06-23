import mongoose from "mongoose";
import { HoppyConnecte } from "./connection_type";

const HoppyConnectSchema = new mongoose.Schema<HoppyConnecte>({
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
});

export const User = mongoose.model<HoppyConnecte>('hoppyconnect', HoppyConnectSchema);