import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, BadgeDollarSign } from "lucide-react";
import type { LucideProps } from "lucide-react";
import whyContent from "../content/why-choose-us.json";

type IconName = "Clock" | "MapPin" | "CheckCircle2" | "BadgeDollarSign";
const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Clock,
  MapPin,
  CheckCircle2,
  BadgeDollarSign,
};

export function WhyChooseMe() {
  const { heading, quote, quote_author, quote_author_title, reasons } = whyContent;

  return (
    <section id="why-ron" className="py-24 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-why-title">
              {heading}
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full mb-10" />
            
            <div className="bg-card border border-border p-8 md:p-10 rounded-2xl relative">
              <div className="absolute top-6 left-6 text-6xl font-serif text-primary/20 leading-none pointer-events-none">"</div>
              
              <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed italic relative z-10 mb-6 mt-4">
                {quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-xl font-bold text-foreground border-2 border-primary/30">
                  {quote_author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">{quote_author}</div>
                  <div className="text-primary text-sm font-medium uppercase tracking-wider">{quote_author_title}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => {
              const Icon = iconMap[reason.icon as IconName] ?? CheckCircle2;
              return (
                <div 
                  key={index}
                  className="p-6 bg-secondary/30 border border-border/50 rounded-xl"
                  data-testid={`card-reason-${index}`}
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
