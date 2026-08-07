import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { House, CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const highlights = [
  "Tiny homes on wheels (THOW) — fully engineered, road-legal builds",
  "Slab-based tiny homes and small dwellings on your own land",
  "Off-grid capable design — solar-ready, water tank, grey water systems",
  "Full insulation to Victorian climate standards — warm winters, cool summers",
  "Custom interior fit-out: kitchen, bathroom, sleeping loft, and storage",
  "Timber frame and structural steel chassis options",
  "Tradie accommodation and site office conversions",
  "Quality finishes throughout — this is a home, not a caravan",
];

export default function TinyHousePage() {
  useEffect(() => {
    document.title = "Tiny House Building | Handyman Ron — Taradale & Mount Alexander Shire";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Custom tiny house building in Taradale, central Victoria. Tiny homes on wheels and slab builds, off-grid capable, fully finished. 40+ years building experience. Call Handyman Ron."
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
                  <House className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">Handyman Ron</p>
                  <h1 className="text-4xl md:text-6xl font-serif font-black text-foreground leading-tight" data-testid="text-page-title">
                    Tiny House Building
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Custom tiny homes built with the same care as any full-scale build — because that's exactly what they are. Based in Taradale, building across central Victoria.
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
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Small footprint, serious build quality</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A tiny home might be small, but it demands the same level of craft as any other building — arguably more. In a compact space, there's nowhere to hide poor workmanship. Joins need to be tight, insulation needs to be thorough, and every cubic centimetre of storage has to be planned properly. The difference between a tiny home that feels like a genuine dwelling and one that feels like a box with a loft is almost entirely in the quality of the build.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ron brings more than 40 years of building experience to every tiny home project. He's built enough structures to know which details matter and which are corners people try to cut — and he approaches tiny home construction with the same standards he'd apply to a full residential build, because that's what it is.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    The central Victoria climate is worth thinking about. Cold winters around Taradale and the Mount Alexander Shire mean insulation isn't optional — it's the difference between a home that's comfortable year-round and one you're heating at enormous cost. Ron builds to perform in this climate, not to a budget that ignores it.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Tiny home services across central Victoria</h2>
                  <ul className="space-y-3 mb-10">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Tiny homes on wheels vs. slab builds</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The difference between a tiny home on wheels (THOW) and a slab-based build comes down to planning requirements and permanence. A THOW in Victoria is classified as a vehicle rather than a dwelling, which means different (and often simpler) regulatory requirements — but it also means engineering the structure and chassis to be genuinely road-legal and safe to move.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    A slab-based tiny home or small dwelling on your own property is a permanent structure and needs to comply with the National Construction Code and local planning requirements. In the Mount Alexander and Macedon Ranges Shires, this includes discussions with council about minimum lot sizes, setbacks, and whether the dwelling is to be connected to services or run off-grid.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ron can build both. He'll be straight with you about what each option involves, what the regulatory process looks like, and which one makes sense for your situation and block.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Off-grid capability in the Mount Alexander region</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Many people who want a tiny home in central Victoria are interested in some degree of off-grid living — solar power, rainwater collection, composting or treatment systems. The rural properties around Taradale, Chewton, and Harcourt are well-suited to this kind of setup. Ron builds tiny homes that are designed for it: proper conduit runs for solar, appropriate tank connections, grey water systems installed correctly. The plumbing and electrical work is done by licensed tradespeople Ron has worked with for years.
                  </p>
                </motion.div>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-card border border-border rounded-2xl p-8 shadow-lg" data-testid="sidebar-cta">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Talk to Ron</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Tiny homes are a big conversation. Call Ron to talk through your ideas — no pressure, just an experienced builder's honest take on what's possible.
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
                      {["Carpentry", "Plastering", "Renovations", "Extensions"].map(s => (
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
