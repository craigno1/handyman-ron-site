import * as React from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Ron", href: "#why-ron" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif font-bold text-2xl text-foreground" data-testid="link-logo">
              Handyman<span className="text-primary">Ron</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/90 hover:text-primary font-medium text-base transition-colors"
                data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:0412345678" className="group" data-testid="link-nav-call">
              <Button variant="default" className="gap-2 shadow-md">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                0412 345 678
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-2"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md"
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a href="tel:0412345678" onClick={() => setIsOpen(false)} data-testid="link-mobile-call">
                <Button className="w-full h-14 text-lg gap-2">
                  <Phone className="w-5 h-5" />
                  0412 345 678
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
