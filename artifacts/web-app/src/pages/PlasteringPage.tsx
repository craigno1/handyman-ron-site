import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Brush, CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const highlights = [
  "Patching and repair work — cracks, holes, water damage, and impact damage",
  "Full room plaster sets for new builds and renovations",
  "Cornice installation, replacement, and heritage profile matching",
  "Render prep and scratch coat application for external surfaces",
  "Smooth finish plastering ready for paint — no texture bleed-through",
  "Fibrous plaster restoration for period homes",
  "Wet area preparation — bathrooms, laundries, and ensuites",
  "Ceiling repairs after roof leaks, with proper drying and re-coat",
];

export default function PlasteringPage() {
  useEffect(() => {
    document.title = "Plastering Services | Handyman Ron — Taradale & Mount Alexander Shire";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Professional plastering in Taradale, Castlemaine, Kyneton and Mount Alexander Shire. Patching, full sets, cornice work, heritage repairs. 40+ years experience. Call Handyman Ron."
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
                  <Brush className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">Handyman Ron</p>
                  <h1 className="text-4xl md:text-6xl font-serif font-black text-foreground leading-tight" data-testid="text-page-title">
                    Plastering
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Smooth walls, sharp cornices, invisible repairs — plastering done the way it's supposed to be done, by someone who's been at it for over 40 years across central Victoria.
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
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Plastering that disappears into the wall</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Good plastering is invisible. When Ron finishes a wall, it's flat, smooth, and ready for paint — there are no ridges at the joins, no patches that telegraph through once the colour goes on, no cornice lines that wander off-level. After more than 40 years in the trade, that level of finish is simply what he considers acceptable.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Plastering is one of those trades where the gaps between a rushed job and a careful one only become obvious later. A patch done in a hurry might look fine the day the painter arrives, but give it a year and the crack's back. Ron takes the time to prep properly — finding what caused the damage, treating it, and making sure the fix is permanent rather than cosmetic.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    Whether you need a small crack patched before selling, a full room set as part of a renovation, or cornice matched in an older home where the profile hasn't been made for decades, Ron approaches each job with the same standard.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Plastering services across Mount Alexander Shire</h2>
                  <ul className="space-y-3 mb-10">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Heritage cornice and fibrous plaster work</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Taradale, Castlemaine, and the surrounding townships are full of Federation and Victorian-era homes with original plasterwork that deserves to be preserved. Fibrous plaster cornices, ceiling roses, dado rails, and decorative mouldings were made to last — but they do need skilled attention when they're damaged or when a renovation disturbs them.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ron has spent decades repairing and restoring heritage plasterwork in central Victoria. He knows how to source matching profiles, how to join sections so the repair is undetectable, and when a section needs to be remade entirely. This kind of work requires patience and an eye for detail — you can't rush it and expect a good outcome.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Water damage and ceiling repairs</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A roof leak or burst pipe can destroy plasterwork quickly. The common mistake is patching before the wall or ceiling has fully dried — the moisture traps behind the new plaster and the problem returns within months. Ron identifies the source of the damage first, makes sure the substrate is properly dry, then repairs the plaster in stages so the result lasts.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ron services the Taradale area and takes plastering work across Castlemaine, Kyneton, Malmsbury, Harcourt, Chewton, Woodend, and the surrounding Mount Alexander Shire and Macedon Ranges.
                  </p>
                </motion.div>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-card border border-border rounded-2xl p-8 shadow-lg" data-testid="sidebar-cta">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Get a free quote</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Send through a photo of the damage or the space, or give Ron a call to describe what you need.
                  </p>
                  <a href="tel:0412345678" data-testid="link-sidebar-call">
                    <Button size="lg" className="w-full gap-2 mb-4 text-lg h-14">
                      <Phone className="w-5 h-5" />
                      0412 345 678
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
                      {["Carpentry", "Renovations", "Extensions", "Tiny House Building"].map(s => (
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
