import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

const OFFERS = [
  {
    title: 'Weekend Brunch Special',
    description: 'Complimentary bottomless mimosas with any main brunch course.',
    tag: 'Limited Time',
    bg: 'bg-orange-600'
  },
  {
    title: 'Wine Tasting Night',
    description: 'Join us every Wednesday for a curated tasting of 5 premium Italian wines.',
    tag: 'Every Wednesday',
    bg: 'bg-orange-950'
  }
];

export const SpecialOffers = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`${offer.bg} p-8 md:p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-xl`}
            >
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl transition-all group-hover:scale-150" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-orange-300" />
                  <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">{offer.tag}</span>
                </div>
                <h4 className="text-3xl font-serif font-bold mb-4">{offer.title}</h4>
                <p className="text-white/80 mb-8 text-lg">{offer.description}</p>
                <button className="flex items-center gap-2 font-bold text-orange-300 hover:text-white transition-colors">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};