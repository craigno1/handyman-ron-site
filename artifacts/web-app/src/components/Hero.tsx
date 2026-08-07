import { motion } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* We use a CSS gradient with noise overlay and dark tone to simulate a workshop vibe */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-80" />
        <div className="absolute inset-0 bg-background/80" />
        
        {/* Subtle grid/texture lines */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        
        {/* Accent glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6" data-testid="text-hero-badge">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Available for projects near Mount Alexander Shire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-title">
              Built right. <br />
              <span className="text-muted-foreground">Fixed properly.</span> <br />
              <span className="text-primary">Done on time.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
              Professional carpentry, renovations, and quality building work across Taradale, Castlemaine, Kyneton, and the wider Mount Alexander Shire and Macedon Ranges. I don't cut corners, and I answer my phone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0412345678" data-testid="link-hero-call">
                <Button size="lg" className="w-full sm:w-auto gap-2 group text-lg">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  0412 345 678
                </Button>
              </a>
              <a href="#contact" data-testid="link-hero-quote">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 group text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
