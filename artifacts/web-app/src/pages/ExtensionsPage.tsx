import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Ruler, CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const highlights = [
  "Single-storey room additions matched to your existing home",
  "Double-storey extensions — structural planning and full build",
  "Garage and shed conversions into habitable living space",
  "Rear and side additions for growing families",
  "Granny flat and secondary dwelling construction",
  "Verandah and alfresco enclosures converted to insulated rooms",
  "Council permit coordination and compliance documentation",
  "Extensions to heritage and period homes handled with care",
];

export default function ExtensionsPage() {
  useEffect(() => {
    document.title = "Home Extensions | Handyman Ron — Taradale & Mount Alexander Shire";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Home extensions in Taradale, Castlemaine, Kyneton and the Mount Alexander Shire. Room additions, double-storey, granny flats, garage conversions. 40+ years experience. Call Handyman Ron."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* Hero */}
        <section className="relative py-20 bg-card border-b border-border overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium mb-8 transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Ruler className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">Handyman Ron</p>
                  <h1 className="text-4xl md:text-6xl font-serif font-black text-foreground leading-tight" data-testid="text-page-title">
                    Extensions
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                When your home needs more space, an extension done properly is one of the best investments you can make. Serving Taradale and the Mount Alexander Shire and Macedon Ranges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">

              <article className="lg:col-span-2" data-testid="text-service-content">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">More space, done right</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    An extension is a significant undertaking — structurally, financially, and logistically. It touches your existing home in ways that require a thorough understanding of how buildings work: how loads transfer through a structure, how to join new materials to old ones, how to tie in rooflines, drainage, and services without creating problems that won't show up for years.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    With more than 40 years of building experience, Ron has completed extensions on properties ranging from small post-war homes to large Federation-era farmhouses across the Mount Alexander Shire and Macedon Ranges. He understands what these builds involve and how to manage them without the stress that often accompanies major building work.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    He's also direct about what a project will cost and how long it will take. If the scope changes once work is underway, he talks about it before spending money, not after.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Extension services in Mount Alexander Shire</h2>
                  <ul className="space-y-3 mb-10">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Council requirements in central Victoria</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Extensions in the Mount Alexander Shire and Macedon Ranges Shire require building permits, and properties with heritage overlays have additional planning requirements that need to be addressed before construction begins. Ron has worked with these councils for many years and understands what they're looking for in an application.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    He can help with permit documentation and connect you with the local building surveyor if needed — or work alongside your own architect or designer if you've already started that process. The goal is to make the approval process as straightforward as possible so the build can get underway without unnecessary delays.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Garage conversions and secondary dwellings</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Converting an existing garage or shed into a habitable room — or building a granny flat or secondary dwelling — is often a practical way to add usable space without the footprint and cost of a full addition. These projects need to meet the same building standards as any other habitable room: adequate insulation, appropriate ceiling heights, and compliant wet area work if a bathroom is included.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ron takes on extension work across Taradale, Castlemaine, Kyneton, Malmsbury, Harcourt, Woodend, and the surrounding region. If you're considering adding to your home, give him a call for a no-obligation conversation about what's involved.
                  </p>
                </motion.div>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-card border border-border rounded-2xl p-8 shadow-lg" data-testid="sidebar-cta">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Get a free quote</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Extensions need a site visit. Call Ron to arrange a time — no cost, no obligation, just an honest conversation about what's involved.
                  </p>
                  <a href="tel:0407897092" data-testid="link-sidebar-call">
                    <Button size="lg" className="w-full gap-2 mb-4 text-lg h-14">
                      <Phone className="w-5 h-5" />
                      0407 897 092
                    </Button>
                  </a>
                  <Link href="/#contact">
                    <Button variant="outline" size="lg" className="w-full" data-testid="link-sidebar-contact">
                      Send an enquiry
                    </Button>
                  </Link>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-3">Also offered</p>
                    <ul className="space-y-2">
                      {["Carpentry", "Plastering", "Renovations", "Tiny House Building"].map(s => (
                        <li key={s}>
                          <Link href={`/${s.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-related-${s.toLowerCase()}`}>
                            → {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
