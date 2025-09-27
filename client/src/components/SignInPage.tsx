"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Phone,
    Ruler,
    ShieldUser,
    MapPinned,
} from "lucide-react";
import { ImageUpload } from "../components/ImageUpload";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        userType: "", // Enum
        password: "",
        confirmPassword: "",
        bloodGroup: "", // Enum
        height: "",
        weight: "",
        disability: "", // Boolean
        gender: "", // Enum
        dateOfBirth: "",
        aadharNumber: "", // Number
        address: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log("Sign up attempt:", { ...formData, profileImage });
        // Handle sign up logic here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            userType: value,
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl border-2 border-slate-200 shadow-xl">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-2xl font-bold text-slate-800">
                        Create Account
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                        Join our medical portal to manage your health records
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Profile Image Upload Section */}
                        <div className="space-y-3">
                            <Label className="text-slate-700 font-medium">
                                Profile Image
                            </Label>
                            <ImageUpload
                                images={profileImage ? [profileImage] : []}
                                onImageChange={(images: File[]) =>
                                    setProfileImage(images[0] || null)
                                }
                            />
                            <p className="text-xs text-slate-500">
                                Upload one profile image (JPG, PNG, WebP)
                            </p>
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* FIRSTNAME */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="firstName"
                                    className="text-slate-700 font-medium"
                                >
                                    First Name
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* LASTNAME */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="lastName"
                                    className="text-slate-700 font-medium"
                                >
                                    Last Name
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-slate-700 font-medium"
                            >
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* PHONE NUMBER */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="phone"
                                className="text-slate-700 font-medium"
                            >
                                Phone Number
                            </Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* AADHAR NUMBER */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="aadharNumber"
                                className="text-slate-700 font-medium"
                            >
                                Aadhar Number
                            </Label>
                            <div className="relative">
                                <ShieldUser className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="aadharNumber"
                                    name="aadharNumber"
                                    type="text"
                                    placeholder="Enter Aadhar Number"
                                    value={formData.aadharNumber}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* ADDRESS */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="address"
                                className="text-slate-700 font-medium"
                            >
                                Address
                            </Label>
                            <div className="relative">
                                <MapPinned className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="Enter Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* USERTYPE */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="userType"
                                    className="text-slate-700 font-medium"
                                >
                                    Account Type
                                </Label>
                                <Select
                                    onValueChange={handleSelectChange}
                                    required
                                >
                                    <SelectTrigger className="border-slate-300 focus:border-coral-500 focus:ring-coral-500">
                                        <SelectValue placeholder="Select account type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="patient">
                                            Patient
                                        </SelectItem>
                                        <SelectItem value="doctor">
                                            Doctor
                                        </SelectItem>
                                        <SelectItem value="admin">
                                            Administrator
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* GENDER */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="gender"
                                    className="text-slate-700 font-medium"
                                >
                                    Gender
                                </Label>
                                <div className="relative">
                                    <Select
                                        onValueChange={handleSelectChange}
                                        required
                                    >
                                        <SelectTrigger className="border-slate-300 focus:border-coral-500 focus:ring-coral-500">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Male">
                                                Male
                                            </SelectItem>
                                            <SelectItem value="Female">
                                                Female
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* BLOOD GROUP */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="bloodGroup"
                                    className="text-slate-700 font-medium"
                                >
                                    Blood Group
                                </Label>
                                <div className="relative">
                                    <Select
                                        onValueChange={handleSelectChange}
                                        required
                                    >
                                        <SelectTrigger className="border-slate-300 focus:border-coral-500 focus:ring-coral-500">
                                            <SelectValue placeholder="Select Blood Group" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A+">
                                                A+
                                            </SelectItem>
                                            <SelectItem value="B+">
                                                B+
                                            </SelectItem>
                                            <SelectItem value="O+">
                                                O+
                                            </SelectItem>
                                            <SelectItem value="AB+">
                                                AB+
                                            </SelectItem>
                                            <SelectItem value="A-">
                                                A-
                                            </SelectItem>
                                            <SelectItem value="B-">
                                                B-
                                            </SelectItem>
                                            <SelectItem value="O-">
                                                O-
                                            </SelectItem>
                                            <SelectItem value="AB-">
                                                AB-
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* DISABILITY */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="disability"
                                    className="text-slate-700 font-medium"
                                >
                                    Disablity
                                </Label>
                                <div className="relative">
                                    <Select
                                        onValueChange={handleSelectChange}
                                        required
                                    >
                                        <SelectTrigger className="border-slate-300 focus:border-coral-500 focus:ring-coral-500">
                                            <SelectValue placeholder="Select Disability" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="None">
                                                None
                                            </SelectItem>
                                            <SelectItem value="Locomotive Disability">
                                                Locomotive Disability
                                            </SelectItem>
                                            <SelectItem value="Leprosy Cured Persons">
                                                Leprosy Cured Persons
                                            </SelectItem>
                                            <SelectItem value="Cerebral Palsy">
                                                Cerebral Palsy
                                            </SelectItem>
                                            <SelectItem value="Dwarfism">
                                                Dwarfism
                                            </SelectItem>
                                            <SelectItem value="Muscular Dystrophy">
                                                Muscular Dystrophy
                                            </SelectItem>
                                            <SelectItem value="Blindness">
                                                Blindness
                                            </SelectItem>
                                            <SelectItem value="Acid Attack Victim">
                                                Acid Attack Victim
                                            </SelectItem>
                                            <SelectItem value="Deaf">
                                                Deaf
                                            </SelectItem>
                                            <SelectItem value="Mental And Behavioral Disorder">
                                                Mental And Behavioral Disorder
                                            </SelectItem>
                                            <SelectItem value="Parkinson's Disease">
                                                Parkinson's Disease
                                            </SelectItem>
                                            <SelectItem value="Hemophilia">
                                                Hemophilia
                                            </SelectItem>
                                            <SelectItem value="Color Blindness">
                                                Color Blindness
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* DOB */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="dateOfBirth"
                                className="text-slate-700 font-medium"
                            >
                                Date of Birth
                            </Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    placeholder="Enter Date of Birth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* HEIGHT */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="height"
                                className="text-slate-700 font-medium"
                            >
                                Heigth
                            </Label>
                            <div className="relative">
                                <Ruler className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="height"
                                    name="height"
                                    type="number"
                                    placeholder="Enter height in centimeters"
                                    value={formData.height}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* WEIGHT */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="weight"
                                className="text-slate-700 font-medium"
                            >
                                Heigth
                            </Label>
                            <div className="relative">
                                <Ruler className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="weight"
                                    name="weight"
                                    type="number"
                                    placeholder="Enter weight in kilograms"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-slate-700 font-medium"
                                >
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Create password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="pl-10 pr-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="confirmPassword"
                                    className="text-slate-700 font-medium"
                                >
                                    Confirm Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="pl-10 pr-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="default"
                            className="w-full font-medium py-2.5"
                        >
                            Create Account
                        </Button>
                    </form>

                    <div className="text-center text-sm text-slate-600">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-blue-500 hover:text-coral-700 font-medium hover:underline"
                        >
                            Login
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
