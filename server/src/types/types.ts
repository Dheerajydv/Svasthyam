import { Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    userType: "patient" | "doctor" | "nurse" | "administration";
    password: string;
    confirmPassword: string;
    bloodGroup: "O+" | "A+" | "B+" | "AB+" | "O-" | "A-" | "B-" | "AB-";
    height: number;
    weight: number;
    disability: string;
    gender: "Male" | "Female";
    dateOfBirth: Date;
    aadhaarNumber: number;
    address: string;
}

export interface IUserMethods {
    generateAccessToken(): string;
    isPasswordCorrect(password: string): boolean;
}

export interface IReport extends Document {
    hospitalName: string;
    reportType: string;
    issueDate: Date;
    doctorName: string;
    disease: string;
    department: string;
    severity: number;
    additionalNote: string;
    reportImages: File[];
}
