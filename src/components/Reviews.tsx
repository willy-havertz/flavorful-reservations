import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    role: 'Food Critic',
    text: 'The roasted duck was absolute perfection. The balance of flavors is something you rarely find. A truly elevated dining experience.',
    stars: 5
  },
  {
    name: 'David Thompson',
    role: 'Local Patron',
    text: 'Best pizza in town. The wood-fired crust has that authentic smoky flavor that takes me straight back to Naples.',
    stars: 5
  },
  {
    name: 'Michael Chen',
    role: 'Events Coordinator',
    text: 'We hosted our corporate gala here and the staff was impeccable. Every detail from the table setting to the wine pairings was handled beautifully.',
    stars: 5
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 px-6 bg-orange-950 text-white overflow-hidden relative">
      <div className="absolute top-10 left-10 text-white/5">
        <Quote className="w-40 h-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Guests Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-orange-400 text-sm font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};