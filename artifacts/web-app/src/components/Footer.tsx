export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-2xl text-foreground mb-2">
              Handyman<span className="text-primary">Ron</span>
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              Taradale, Victoria
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <a href="tel:0407897092" className="block text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors mb-2">
              0407 897 092
            </a>
            <p className="text-muted-foreground text-sm font-medium">
              Quality tradesmanship. Local reliability.
            </p>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/70 text-sm">
            © {currentYear} Handyman Ron. All rights reserved.
          </p>
          <p className="text-muted-foreground/70 text-sm font-medium">
            Licensed Builder — Victoria
          </p>
        </div>
      </div>
    </footer>
  );
}
