import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
    Clock,
    Shield,
    Search,
    Users,
    Smartphone,
    RefreshCw,
    AlertTriangle,
    CheckCircle,
} from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "24/7 Access",
        description:
            "Access your medical records anytime, anywhere - perfect for emergencies or unexpected medical situations.",
    },
    {
        icon: Shield,
        title: "Secure & Private",
        description:
            "Your data is encrypted and stored securely. Only you control who can access your medical information.",
    },
    {
        icon: Search,
        title: "Easy Search & Find",
        description:
            "Quickly locate specific medical records, prescriptions, or test results with our powerful search functionality.",
    },
    {
        icon: Users,
        title: "Family Management",
        description:
            "Manage medical records for your entire family in one account with appropriate privacy controls.",
    },
    {
        icon: Smartphone,
        title: "Mobile Convenience",
        description:
            "Upload documents, check records, and share information with doctors directly from your smartphone.",
    },
    {
        icon: RefreshCw,
        title: "Never Lose Records",
        description:
            "Cloud backup ensures your medical history is never lost, even if you change doctors or move cities.",
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Working Mother",
        content:
            "Svasthyam helped me organize my family's medical records. Now I can quickly access vaccination records for school admissions and share relevant information with new doctors.",
        rating: 5,
    },
    {
        name: "Dr. Rajesh Kumar",
        role: "Cardiologist",
        content:
            "My patients who use Svasthyam come prepared with complete medical histories. It saves consultation time and helps me make better-informed treatment decisions.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        role: "Senior Citizen",
        content:
            "I lost all my medical records during relocation. Svasthyam helped me digitize everything and now I never worry about losing important health information again.",
        rating: 5,
    },
];

export function BenefitsSection() {
    return (
        <section id="benefits" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Benefits Header */}
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl">
                        Why Choose Svasthyam?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Experience the peace of mind that comes with having your
                        complete medical history organized, secured, and
                        accessible whenever you need it.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white"
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <IconComponent className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Emergency Access Feature */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                            <AlertTriangle className="h-4 w-4" />
                            <span>Emergency Feature</span>
                        </div>
                        <h3 className="text-3xl">
                            Critical Information When You Need It Most
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            In medical emergencies, every second counts.
                            Svasthyam provides quick access to critical medical
                            information including allergies, chronic conditions,
                            emergency contacts, and current medications.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>
                                    Instant access to allergies and medical
                                    conditions
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>
                                    Emergency contact information readily
                                    available
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>
                                    Current medication list for better emergency
                                    care
                                </span>
                            </div>
                        </div>
                        <Button size="lg">Learn About Emergency Access</Button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1629036747901-6cad3758cd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaGVhbHRoJTIwYXBwJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTc5NTA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Mobile health app showing emergency medical information"
                            className="w-full h-96 object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Testimonials */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl lg:text-3xl mb-4">
                            What Our Users Say
                        </h3>
                        <p className="text-muted-foreground">
                            Join thousands of satisfied users who have
                            transformed their healthcare experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-md bg-white"
                            >
                                <CardHeader>
                                    <div className="flex items-center space-x-1 mb-2">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <span
                                                    key={i}
                                                    className="text-yellow-500"
                                                >
                                                    ★
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <CardTitle className="text-lg">
                                        {testimonial.name}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground italic">
                                        "{testimonial.content}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Card className="border-0 shadow-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground max-w-4xl mx-auto">
                        <CardContent className="p-8 space-y-6">
                            <h3 className="text-2xl lg:text-3xl">
                                Ready to Take Control of Your Health Records?
                            </h3>
                            <p className="text-lg opacity-90">
                                Start your journey towards better healthcare
                                management today. It's free to get started.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="text-lg px-8"
                                >
                                    <a href="/sign-in">Start Free Trial</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="text-lg px-8"
                                >
                                    Schedule Demo
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
