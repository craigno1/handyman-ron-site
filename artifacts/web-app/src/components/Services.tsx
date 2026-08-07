import { motion } from "framer-motion";
import { Hammer, Brush, Home, Ruler, House } from "lucide-react";

const services = [
  {
    title: "Carpentry",
    icon: Hammer,
    description: "Framing, decking, custom joinery, cabinetry, and structural timber work. Built to Australian standards with timber that lasts.",
  },
  {
    title: "Plastering",
    icon: Brush,
    description: "Flawless patching, full room sets, detailed cornice work, and render prep. Smooth finishes ready for paint.",
  },
  {
    title: "Renovations",
    icon: Home,
    description: "Kitchens, bathrooms, and living areas. From full gut-and-rebuilds to targeted updates that breathe new life into your home.",
  },
  {
    title: "Extensions",
    icon: Ruler,
    description: "Single and double-storey additions, garage conversions, and extra rooms. Fully council-compliant builds matched to your existing layout.",
  },
  {
    title: "Tiny House Building",
    icon: House,
    description: "Custom-built tiny homes on wheels or slab. Off-grid capable, smartly designed, and fully finished to your specs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-card relative z-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-services-title">
            The work I do.
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              variants={cardVariants}
              className="group bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="bg-secondary w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* Call to action card filling the 6th slot on large screens */}
          <motion.div 
            variants={cardVariants}
            className="group bg-primary text-primary-foreground p-8 rounded-xl flex flex-col justify-center items-start lg:col-span-1 md:col-span-2 lg:min-h-[300px]"
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Need something else?</h3>
            <p className="text-primary-foreground/90 mb-8 text-lg font-medium">
              If it involves timber, plaster, or tools, I probably do it. Give me a ring and let's chat.
            </p>
            <a href="tel:0412345678" className="inline-flex items-center font-bold text-lg hover:underline underline-offset-4 decoration-2">
              Call 0412 345 678 <span className="ml-2">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
