import { motion } from "framer-motion";
import { Hammer, Brush, Home, Ruler, House, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { LucideProps } from "lucide-react";
import servicesContent from "../content/services.json";
import homeContent from "../content/home.json";
import globalContent from "../content/global.json";

type IconName = "Hammer" | "Brush" | "Home" | "Ruler" | "House";
const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Hammer,
  Brush,
  Home,
  Ruler,
  House,
};

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
  const { services_section } = homeContent;
  const { phone_display, phone_raw } = globalContent;

  return (
    <section id="services" className="py-24 bg-card relative z-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6" data-testid="text-services-title">
            {services_section.heading}
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
          {servicesContent.services.map((service, index) => {
            const Icon = iconMap[service.icon as IconName] ?? Hammer;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-colors duration-300 relative overflow-hidden flex flex-col"
                data-testid={`card-service-${index}`}
              >
                <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="bg-secondary w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
                  {service.description}
                </p>

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:underline underline-offset-4 group/link"
                  data-testid={`link-service-${service.slug}`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            variants={cardVariants}
            className="group bg-primary text-primary-foreground p-8 rounded-xl flex flex-col justify-center items-start lg:col-span-1 md:col-span-2 lg:min-h-[300px]"
          >
            <h3 className="text-2xl font-serif font-bold mb-4">{services_section.cta_heading}</h3>
            <p className="text-primary-foreground/90 mb-8 text-lg font-medium">
              {services_section.cta_text}
            </p>
            <a href={`tel:${phone_raw}`} className="inline-flex items-center font-bold text-lg hover:underline underline-offset-4 decoration-2" data-testid="link-services-cta-call">
              Call {phone_display} <span className="ml-2">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
