import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Phone, Mail, Clock, MessageSquare, HelpCircle } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl">
                        Get Started or Get Help
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to digitize your medical records or have questions
                        about Svasthyam? We're here to support your healthcare
                        journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>Support</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <p className="font-medium">
                                        Customer Support
                                    </p>
                                    <p className="text-muted-foreground">
                                        1-800-SVASTHYAM
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium">
                                        Technical Help
                                    </p>
                                    <p className="text-muted-foreground">
                                        support@svasthyam.com
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>Email Us</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <p className="font-medium">
                                        General Inquiries
                                    </p>
                                    <p className="text-muted-foreground">
                                        hello@svasthyam.com
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium">
                                        Privacy & Security
                                    </p>
                                    <p className="text-muted-foreground">
                                        privacy@svasthyam.com
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <span>Support Hours</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Email Support Only</span>
                                </div>
                                <div className="pt-2 border-t">
                                    <div className="flex items-center space-x-2 text-blue-600">
                                        <MessageSquare className="h-4 w-4" />
                                        <span className="text-sm">
                                            Live Chat Available
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-md bg-blue-50">
                            <CardContent className="p-4 text-center space-y-3">
                                <HelpCircle className="h-8 w-8 text-blue-600 mx-auto" />
                                <h4 className="font-medium">
                                    Need Help Getting Started?
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Book a free 15-minute onboarding call with
                                    our team
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                >
                                    Schedule Call
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-0 shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>Send us a Message</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">
                                            First Name
                                        </Label>
                                        <Input
                                            id="firstName"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">
                                            Last Name
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">
                                            Phone (Optional)
                                        </Label>
                                        <Input
                                            id="phone"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="inquiryType">
                                        Type of Inquiry
                                    </Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select inquiry type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="getting-started">
                                                Getting Started
                                            </SelectItem>
                                            <SelectItem value="technical-support">
                                                Technical Support
                                            </SelectItem>
                                            <SelectItem value="account-help">
                                                Account Help
                                            </SelectItem>
                                            <SelectItem value="privacy-security">
                                                Privacy & Security
                                            </SelectItem>
                                            <SelectItem value="feature-request">
                                                Feature Request
                                            </SelectItem>
                                            <SelectItem value="other">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Brief description of your inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Please provide details about your question or how we can help you..."
                                        className="min-h-32"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="flex-1">
                                        Send Message
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        Start Free Trial Instead
                                    </Button>
                                </div>

                                <div className="text-sm text-muted-foreground text-center pt-4 border-t">
                                    By contacting us, you agree to our privacy
                                    policy. We typically respond within 4 hours
                                    during business hours.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
