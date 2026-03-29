import React from 'react';
import { Camera, Globe, MessageSquare } from 'lucide-react';

const CHEFS = [
  {
    name: 'Chef Marco Rossi',
    role: 'Executive Chef',
    bio: 'With over 20 years of experience in Michelin-starred kitchens across Europe, Marco brings a passion for seasonal flavors.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ee92ffd1-95b4-4122-a43e-1ca5cebbc5cb/chef-marco-98097419-1774820293786.webp'
  },
  {
    name: 'Chef Elena Vance',
    role: 'Pastry Chef',
    bio: 'The architect behind our dessert menu, Elena specializes in modern interpretations of classic French pastries.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800'
  }
];

export const ChefSection = () => {
  return (
    <section id="chefs" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">The Culinary Team</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-6">Masters of the Kitchen</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CHEFS.map((chef, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-center bg-orange-50/20 p-8 rounded-[3rem] border border-orange-100">
              <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-orange-600 font-bold text-sm uppercase mb-2 block">{chef.role}</span>
                <h4 className="text-2xl font-serif font-bold text-orange-950 mb-4">{chef.name}</h4>
                <p className="text-orange-900/60 mb-6 leading-relaxed italic">"{chef.bio}"</p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-white rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-colors">
                    <Camera className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};