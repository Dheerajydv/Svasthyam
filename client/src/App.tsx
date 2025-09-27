import { Route, Routes } from "react-router-dom";
import { BenefitsSection } from "./components/BenefitsSection";
import { ContactSection } from "./components/ContactSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import MedicalRecordForm from "./components/MedicalRecordForm";
import SignInPage from "./components/SignInPage";
import LoginPage from "./components/LoginPage";
import AllReports from "./components/AllReports";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <HeroSection />
                            <FeaturesSection />
                            <HowItWorksSection />
                            <BenefitsSection />
                            <ContactSection />
                        </main>
                    }
                />
                <Route path="/form" element={<MedicalRecordForm />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/reports" element={<AllReports />} />
                <Route path="/404-not-found" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
};
export default App;
