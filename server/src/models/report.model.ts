import mongoose, { Model, Schema } from "mongoose";
import { IReport } from "../types/types";

const reportSchema = new Schema<IReport>(
    {
        hospitalName: {
            type: String,
            required: true,
        },
        reportType: {
            type: String,
            required: true,
        },
        issueDate: {
            type: Date,
            required: true,
        },
        doctorName: {
            type: String,
            required: true,
        },
        disease: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        severity: {
            type: Number,
            required: true,
        },
        additionalNote: {
            type: String,
            required: true,
        },
        reportImages: [
            {
                type: String,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Report = mongoose.model<IReport, Model<IReport>>("Report", reportSchema);

export default Report;
