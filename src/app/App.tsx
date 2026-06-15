import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { WhyUs } from "./components/WhyUs";
import { Schedule } from "./components/Schedule";
import { RegisterForm } from "./components/RegisterForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fa]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Programs />
      <WhyUs />
      <Schedule />
      <RegisterForm />
      <Footer />
    </div>
  );
}
