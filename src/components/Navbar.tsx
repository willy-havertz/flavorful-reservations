import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Our Chefs', href: '#chefs' },
    { name: 'Events', href: '#events' },
    { name: 'Location', href: '#footer' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 p-2 rounded-lg">
            <UtensilsCrossed className="w-6 h-6 text-white" />
          </div>
          <span className={cn(
            "text-2xl font-serif font-bold",
            isScrolled ? "text-orange-950" : "text-white"
          )}>
            L'Artisane
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-orange-600",
                isScrolled ? "text-orange-900" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-transform active:scale-95 shadow-lg shadow-orange-900/20">
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-orange-950" : "text-white"} />
          ) : (
            <MenuIcon className={isScrolled ? "text-orange-950" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-orange-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-orange-950 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-orange-600 text-white w-full py-3 rounded-xl font-bold">
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};