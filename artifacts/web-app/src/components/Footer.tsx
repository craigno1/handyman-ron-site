import globalContent from "../content/global.json";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { site_name, phone_display, phone_raw, location, tagline, footer_license } = globalContent;

  const [name, accent] = site_name.split(/(?=[A-Z][a-z])/).length > 1
    ? [site_name.replace(/Ron$/, ""), "Ron"]
    : [site_name.slice(0, -3), site_name.slice(-3)];

  return (
    <footer className="bg-background border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-2xl text-foreground mb-2">
              {name}<span className="text-primary">{accent}</span>
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              {location}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <a href={`tel:${phone_raw}`} className="block text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors mb-2">
              {phone_display}
            </a>
            <p className="text-muted-foreground text-sm font-medium">
              {tagline}
            </p>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/70 text-sm">
            © {currentYear} {site_name}. All rights reserved.
          </p>
          <p className="text-muted-foreground/70 text-sm font-medium">
            {footer_license}
          </p>
        </div>
      </div>
    </footer>
  );
}
