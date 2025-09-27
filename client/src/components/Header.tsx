import { Button } from "./ui/button";
import { Menu, Shield } from "lucide-react";

export function Header() {
    return (
        <header className="w-full border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                            <Shield className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="text-primary font-semibold text-xl">
                            <a href="/">Svasthyam</a>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="/#home"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="/#features"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="/#how-it-works"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            How It Works
                        </a>
                        <a
                            href="/#benefits"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Benefits
                        </a>
                        <a
                            href="/#contact"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button variant="default" className="sm:flex">
                            <a href="/sign-in">Sign In</a>
                        </Button>
                        <Button variant="default">
                            <a href="/form">Get Started</a>
                        </Button>
                        <Button variant="default">
                            <a href="/reports">My Reports</a>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
