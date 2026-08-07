import * as React from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "wouter";

const serviceLinks = [
  { name: "Carpentry", href: "/carpentry" },
  { name: "Plastering", href: "/plastering" },
  { name: "Renovations", href: "/renovations" },
  { name: "Extensions", href: "/extensions" },
  { name: "Tiny House Building", href: "/tiny-house-building" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [location] = useLocation();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif font-bold text-2xl text-foreground" data-testid="link-logo">
              Handyman<span className="text-primary">Ron</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-foreground/90 hover:text-primary font-medium text-base transition-colors"
                data-testid="button-nav-services"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-xl overflow-hidden" data-testid="dropdown-services">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                      data-testid={`link-nav-service-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isHome ? (
              <>
                <a href="#why-ron" className="text-foreground/90 hover:text-primary font-medium text-base transition-colors" data-testid="link-nav-why-ron">
                  Why Ron
                </a>
                <a href="#contact" className="text-foreground/90 hover:text-primary font-medium text-base transition-colors" data-testid="link-nav-contact">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link href="/#why-ron" className="text-foreground/90 hover:text-primary font-medium text-base transition-colors" data-testid="link-nav-why-ron">
                  Why Ron
                </Link>
                <Link href="/#contact" className="text-foreground/90 hover:text-primary font-medium text-base transition-colors" data-testid="link-nav-contact">
                  Contact
                </Link>
              </>
            )}

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
              onClick={() => setIsOpen(!isOpen)}
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
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {/* Services expandable */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md"
                data-testid="button-mobile-services"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                      className="block px-3 py-2.5 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md"
                      data-testid={`link-mobile-service-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={isHome ? "#why-ron" : "/#why-ron"}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md"
              data-testid="link-mobile-nav-why-ron"
            >
              Why Ron
            </a>
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md"
              data-testid="link-mobile-nav-contact"
            >
              Contact
            </a>
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
