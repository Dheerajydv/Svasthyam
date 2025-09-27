import { Button } from "./ui/button";
import {
    Shield,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Phone,
    Mail,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-lg">
                                <Shield className="h-5 w-5 text-gray-900" />
                            </div>
                            <h3 className="text-xl">Svasthyam</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Empowering patients with secure, accessible digital
                            health records. Your health information, organized
                            and protected for better healthcare outcomes.
                        </p>
                        <div className="flex space-x-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-white/10"
                            >
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-white/10"
                            >
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-white/10"
                            >
                                <Instagram className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-white/10"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-medium">Platform</h4>
                        <div className="space-y-2 text-sm">
                            <a
                                href="#home"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                How It Works
                            </a>
                            <a
                                href="#benefits"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Benefits
                            </a>
                            <a
                                href="#contact"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <h4 className="font-medium">Features</h4>
                        <div className="space-y-2 text-sm">
                            <a
                                href="#"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Medical Records
                            </a>
                            <a
                                href="#"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Prescription Management
                            </a>
                            <a
                                href="#"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Appointment Tracking
                            </a>
                            <a
                                href="#"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Emergency Access
                            </a>
                            <a
                                href="#"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Family Management
                            </a>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="font-medium">Support</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-300">
                                    1-800-SVASTHYAM
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <span className="text-gray-300">
                                    support@svasthyam.com
                                </span>
                            </div>
                            <div className="space-y-1">
                                <a
                                    href="#"
                                    className="block text-gray-300 hover:text-white transition-colors"
                                >
                                    Help Center
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-300 hover:text-white transition-colors"
                                >
                                    Getting Started Guide
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-300 hover:text-white transition-colors"
                                >
                                    Video Tutorials
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Separator className="my-8 bg-gray-700" /> */}

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-gray-400">
                        © 2024 Svasthyam. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Security & HIPAA
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Data Protection
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
