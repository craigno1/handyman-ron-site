import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Hammer, CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const highlights = [
  "Structural timber framing for new builds and extensions",
  "Hardwood and treated pine decking — built to last central Victoria's seasons",
  "Custom joinery: built-in cabinetry, wardrobes, bookshelves, and storage solutions",
  "Pergolas, carports, and outdoor structures",
  "Fascia, eaves, and weatherboard replacement and repair",
  "Internal fit-out: skirting, architraves, door hanging, and stair work",
  "Heritage-sympathetic repairs on period homes common in the region",
  "Sub-floor framing, bearers and joists, and floor levelling",
];

export default function CarpentryPage() {
  useEffect(() => {
    document.title = "Carpentry Services | Handyman Ron — Taradale & Mount Alexander Shire";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Expert carpentry in Taradale, Castlemaine, Kyneton and the Mount Alexander Shire. Structural framing, custom joinery, decking, and heritage repairs. 40+ years experience. Call Handyman Ron."
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
                  <Hammer className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">Handyman Ron</p>
                  <h1 className="text-4xl md:text-6xl font-serif font-black text-foreground leading-tight" data-testid="text-page-title">
                    Carpentry
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Structural and finish carpentry across Taradale, Castlemaine, Kyneton, and the Mount Alexander Shire — built properly, by someone who's been doing it for over four decades.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Article */}
              <article className="lg:col-span-2 prose-lg" data-testid="text-service-content">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Carpentry you can count on</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    With more than 40 years of hands-on experience, Ron has worked on everything from the structural bones of new homes to the fine details of custom joinery. In that time, he's developed a respect for timber that only comes from working with it every day — understanding how different species behave across seasons, which joints hold under load, and how to frame a roof that'll still be solid in 30 years.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Central Victoria's housing stock tells a story. The older homes around Castlemaine, Chewton, and Taradale were built in an era when tradespeople took genuine pride in their craft. Ron works in that tradition — measuring twice, cutting once, and never taking shortcuts that look fine on the day but cause headaches down the track.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    Whether you need a deck that can handle Australian summers, a set of built-in wardrobes that fit your space properly, or structural framing for an addition, Ron brings the same care and attention to every job. He works alone, which means the standard doesn't vary depending on which apprentice turned up that morning.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Carpentry services in Mount Alexander Shire</h2>
                  <ul className="space-y-3 mb-10">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Heritage homes and period properties</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The Mount Alexander Shire and Macedon Ranges are home to a remarkable number of Victorian-era and Federation homes. These properties need a carpenter who understands period construction — the way those walls were framed, how the floors were laid, and why you can't just substitute modern materials without thinking about compatibility and aesthetics.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ron has spent decades working on older homes in this region. He can match heritage profiles, source appropriate timber species, and repair or replicate elements that give these homes their character — without making it look like a renovation that happened in the wrong decade.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Serving Taradale and surrounding areas</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ron takes on carpentry work across Taradale, Castlemaine, Kyneton, Malmsbury, Chewton, Harcourt, Woodend, and the broader Mount Alexander Shire and Macedon Ranges. If you're not sure whether he covers your area, just give him a call — he'd rather have that conversation than have you wonder.
                  </p>
                </motion.div>
              </article>

              {/* Sidebar CTA */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-card border border-border rounded-2xl p-8 shadow-lg" data-testid="sidebar-cta">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Get a free quote</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Describe the job and Ron will come out to take a look. No commitment, no sales pitch — just a straight conversation about what it'll take.
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
                      {["Plastering", "Renovations", "Extensions", "Tiny House Building"].map(s => (
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
