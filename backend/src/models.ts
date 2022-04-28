import mongoose from "mongoose";
import { HoppyEntry } from "./types";

const HoppyImgSchema = new mongoose.Schema<HoppyEntry>({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
    picture: { type: String, required: true },
    description: { type: String, required: true },
});

export const HoppyImgModel = mongoose.model<HoppyEntry>('hoppyimg', HoppyImgSchema);