import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, BadgeDollarSign } from "lucide-react";

export function WhyChooseMe() {
  const reasons = [
    {
      icon: Clock,
      title: "20+ Years on the Tools",
      description: "I've seen it all and fixed it all. No guesswork, just solid experience applied to your project."
    },
    {
      icon: MapPin,
      title: "Gippsland Local",
      description: "Based right here in Tardale. I know the area, the suppliers, and what local houses need."
    },
    {
      icon: CheckCircle2,
      title: "No Subcontractor Roulette",
      description: "When you hire Ron, you get Ron. I do the work myself so I can guarantee the quality."
    },
    {
      icon: BadgeDollarSign,
      title: "Straight-Up Pricing",
      description: "Detailed quotes with no hidden extras. If we hit a snag, we talk about it before I spend your money."
    }
  ];

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
              Why locals keep coming back to Ron.
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full mb-10" />
            
            <div className="bg-card border border-border p-8 md:p-10 rounded-2xl relative">
              {/* Decorative quote mark */}
              <div className="absolute top-6 left-6 text-6xl font-serif text-primary/20 leading-none pointer-events-none">"</div>
              
              <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed italic relative z-10 mb-6 mt-4">
                I take on work I'm proud to put my name on. That means I don't rush, I don't cut corners, and I answer my phone.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-xl font-bold text-foreground border-2 border-primary/30">
                  R
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">Ron</div>
                  <div className="text-primary text-sm font-medium uppercase tracking-wider">Licensed Builder</div>
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
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/30 border border-border/50 rounded-xl"
                data-testid={`card-reason-${index}`}
              >
                <reason.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
