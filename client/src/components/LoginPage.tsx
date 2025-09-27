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
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        aadharNumber: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempt:", formData);
        // Handle login logic here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-2 border-slate-200 shadow-xl">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-2xl font-bold text-slate-800">
                        Welcome Back
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                        Sign in to your medical portal account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="aadharNumber"
                                className="text-slate-700 font-medium"
                            >
                                Email Address
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="aadharNumber"
                                    name="aadharNumber"
                                    type="aadharNumber"
                                    placeholder="Enter your Aadhar Number"
                                    value={formData.aadharNumber}
                                    onChange={handleInputChange}
                                    className="pl-10 border-slate-300 focus:border-coral-500 focus:ring-coral-500"
                                    required
                                />
                            </div>
                        </div>

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
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
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

                        <div className="flex items-center justify-between text-sm">
                            <a
                                href="/forgot-password"
                                className="text-coral-600 hover:text-coral-700 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            variant="default"
                            className="w-full py-2.5"
                        >
                            Sign In
                        </Button>
                    </form>

                    <div className="text-center text-sm text-slate-600">
                        Don't have an account?{" "}
                        <a
                            href="/sign-in"
                            className="text-blue-500 hover:text-coral-700 font-medium hover:underline"
                        >
                            Create account
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
