import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { Menu } from './components/Menu';
import { Reservations } from './components/Reservations';
import { ChefSection } from './components/ChefSection';
import { Reviews } from './components/Reviews';
import { EventBooking } from './components/EventBooking';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-orange-50/30 selection:bg-orange-200 selection:text-orange-900">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <SpecialOffers />
        <Menu />
        <Reservations />
        <ChefSection />
        <Reviews />
        <EventBooking />
      </main>
      <Footer />
    </div>
  );
}

export default App;