import React from 'react';
import { Calendar, Users, Clock, Mail, Phone, User } from 'lucide-react';
import { toast } from 'sonner';

export const Reservations = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Reservation request sent! We will confirm your table shortly.');
  };

  return (
    <section id="reservations" className="py-24 px-6 bg-orange-50/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 text-center lg:text-left">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-8 text-center lg:text-left">
            Secure Your Table for an Unforgettable Evening
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-orange-100">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-orange-950">Opening Hours</h4>
                <p className="text-orange-900/60">Tue - Sat: 11:00 AM - 11:00 PM</p>
                <p className="text-orange-900/60">Sun: 10:00 AM - 4:00 PM (Brunch)</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-orange-100">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-orange-950">Direct Booking</h4>
                <p className="text-orange-900/60">+1 (555) 123-4567</p>
                <p className="text-orange-900/60">reservations@lartisane.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-orange-900/5 border border-orange-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-orange-950 ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                  <input 
                    type="date" 
                    required
                    className="w-full pl-11 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-orange-950 ml-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                  <select 
                    className="w-full pl-11 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none"
                    required
                  >
                    <option value="">Select Time</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-orange-950 ml-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                  <select 
                    className="w-full pl-11 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none"
                    required
                  >
                    <option value="">Number of Guests</option>
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6+ People</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-orange-950 ml-1">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-orange-50/50 border border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-lg shadow-orange-900/10"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};