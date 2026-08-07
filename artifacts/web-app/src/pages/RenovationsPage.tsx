import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const highlights = [
  "Kitchen renovations — full gut and rebuild or targeted updates",
  "Bathroom and ensuite renovations including wet area waterproofing",
  "Laundry and mudroom fit-outs",
  "Internal wall removal and open-plan conversions",
  "Living area and bedroom renovations — new flooring, linings, and fit-out",
  "Period home restoration — maintaining character while improving liveability",
  "Investment property upgrades — practical improvements that add value",
  "Full project coordination across trades, or single-trade carpentry and plastering",
];

export default function RenovationsPage() {
  useEffect(() => {
    document.title = "Home Renovations | Handyman Ron — Taradale & Mount Alexander Shire";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Home renovations in Taradale, Castlemaine, Kyneton and the Mount Alexander Shire. Kitchens, bathrooms, living areas, period homes. 40+ years experience. Call Handyman Ron."
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
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">Handyman Ron</p>
                  <h1 className="text-4xl md:text-6xl font-serif font-black text-foreground leading-tight" data-testid="text-page-title">
                    Renovations
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Home renovations done properly — from kitchen and bathroom upgrades to whole-of-house transformations. Serving Taradale and the Mount Alexander Shire and Macedon Ranges.
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
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Renovations that add up to something</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A renovation is one of the bigger financial commitments most homeowners make. Done well, it transforms how you live in your home and adds genuine value. Done badly, it creates problems you're dealing with for years — water getting where it shouldn't, walls that don't sit right, finishes that fail within a few seasons.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ron has been doing renovations for over 40 years, across every type of home you'll find in central Victoria — from newer brick veneer in Kyneton to original weatherboard workers' cottages in Castlemaine. That experience means he understands what different houses need and what problems to look for before they become expensive surprises mid-project.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    He approaches renovation work the same way he approaches everything: with honest conversation upfront, a clear quote, and a commitment to doing the work to a standard he'd be happy with in his own home.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Renovation services across Mount Alexander Shire</h2>
                  <ul className="space-y-3 mb-10">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Kitchens and bathrooms</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Kitchens and bathrooms are where most renovation budgets go — and where the consequences of poor workmanship are most obvious. Water penetration behind shower walls, cabinet work that doesn't line up properly, benchtops that aren't level — these aren't just aesthetic problems, they become structural and hygiene issues.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ron handles the carpentry and joinery side of kitchen and bathroom renovations, and can coordinate the other trades you'll need — plumbing, electrical, tiling — through his network of trusted local operators. If you want a single point of contact who takes responsibility for the whole job, that's something he can manage.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Period home renovations in central Victoria</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The Mount Alexander Shire is one of Victoria's most significant concentrations of nineteenth and early twentieth century housing. These homes — many of them heritage-listed — require particular care when renovating. The challenge is improving liveability and function without erasing the qualities that make them worth living in.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ron has spent decades working on period properties in this region. He knows how to open up a floor plan without losing the proportions that give an old home its character, how to integrate modern joinery without it looking out of place, and how to navigate the specifics of heritage overlays in the Mount Alexander and Macedon Ranges councils.
                  </p>
                </motion.div>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-card border border-border rounded-2xl p-8 shadow-lg" data-testid="sidebar-cta">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Get a free quote</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Tell Ron what you're planning. He'll come out, take a proper look, and give you an honest quote with no pressure.
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
                      {["Carpentry", "Plastering", "Extensions", "Tiny House Building"].map(s => (
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
