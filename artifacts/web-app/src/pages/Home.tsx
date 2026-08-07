import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseMe } from "../components/WhyChooseMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  // Update meta tags for SEO
  useEffect(() => {
    document.title = "Handyman Ron | Builder & Tradesman in Taradale, Mount Alexander Shire";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Licensed builder and tradesman based in Taradale, VIC. 40+ years experience in carpentry, plastering, renovations, extensions, and tiny house building across Mount Alexander Shire and Macedon Ranges.');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Services />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
