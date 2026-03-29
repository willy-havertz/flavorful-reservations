import React from 'react';
import { PartyPopper, CalendarDays, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const EventBooking = () => {
  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your event inquiry has been sent! Our events coordinator will contact you shortly.');
  };

  return (
    <section id="events" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto rounded-[3.5rem] overflow-hidden bg-orange-50 border border-orange-100 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 md:p-16">
          <div className="flex items-center gap-3 text-orange-600 mb-6 font-bold uppercase tracking-widest text-sm">
            <PartyPopper className="w-5 h-5" />
            <span>Private Events</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-8 leading-tight">
            Elevate Your Special Occasions
          </h3>
          <p className="text-orange-900/60 text-lg mb-8">
            From intimate birthday dinners to elegant wedding receptions, our dedicated events team will help you create an unforgettable experience tailored to your vision.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Private Dining Rooms', 'Customized Menus', 'Professional Event Staff', 'Premium Wine Selection'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-orange-950 font-medium">
                <div className="w-2 h-2 rounded-full bg-orange-600" />
                {item}
              </li>
            ))}
          </ul>

          <form onSubmit={handleInquiry} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-grow px-6 py-4 rounded-2xl bg-white border border-orange-100 focus:ring-2 focus:ring-orange-600 outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
              Get Inquiry <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
        
        <div 
          className="lg:w-1/2 min-h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/ee92ffd1-95b4-4122-a43e-1ca5cebbc5cb/event-space-e62dfa21-1774820294074.webp')` }}
        />
      </div>
    </section>
  );
};