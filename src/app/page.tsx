import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import TrustedBy from "../components/landing/TrustedBy";
import AICFOSection from "../components/landing/AICFOSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <AICFOSection />
    </>
  );
}