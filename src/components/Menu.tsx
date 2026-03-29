import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Info, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const MENU_CATEGORIES = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Drinks'];
const DIETARY_FILTERS = [
  { id: 'v', label: 'Vegetarian', icon: <Leaf className="w-3 h-3" /> },
  { id: 'gf', label: 'Gluten-Free', icon: <Star className="w-3 h-3" /> },
];

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Artisanal Wood-Fired Pizza',
    description: 'Slow-risen dough, buffalo mozzarella, fresh basil, and San Marzano tomatoes.',
    price: '$24',
    category: 'Main Course',
    dietary: ['v'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ee92ffd1-95b4-4122-a43e-1ca5cebbc5cb/menu-pizza-fc0e2d54-1774820293759.webp'
  },
  {
    id: 2,
    name: 'Citrus Garden Salad',
    description: 'Fresh organic greens, avocado, pomegranate seeds, and a zesty citrus vinaigrette.',
    price: '$18',
    category: 'Appetizers',
    dietary: ['v', 'gf'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ee92ffd1-95b4-4122-a43e-1ca5cebbc5cb/menu-salad-3b6dc4fa-1774820294109.webp'
  },
  {
    id: 3,
    name: 'Signature Roasted Duck',
    description: 'Tender roasted duck breast served with glazed seasonal vegetables and orange jus.',
    price: '$42',
    category: 'Main Course',
    dietary: ['gf'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ee92ffd1-95b4-4122-a43e-1ca5cebbc5cb/hero-dish-133f40a7-1774820293153.webp'
  },
  {
    id: 4,
    name: 'Chocolate Lava Decadence',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
    price: '$14',
    category: 'Desserts',
    dietary: ['v'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/ee92ffd1-95b4-4122-a43e-1ca5cebbc5cb/menu-dessert-643c385b-1774820298806.webp'
  },
  {
    id: 5,
    name: 'Truffle Mac & Cheese',
    description: 'Creamy artisanal cheeses infused with black truffle oil and toasted breadcrumbs.',
    price: '$22',
    category: 'Appetizers',
    dietary: ['v'],
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    name: 'Seared Scallops',
    description: 'Jumbo sea scallops with pea purée and crispy pancetta chips.',
    price: '$28',
    category: 'Appetizers',
    dietary: ['gf'],
    image: 'https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?auto=format&fit=crop&q=80&w=800'
  }
];

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDietary, setActiveDietary] = useState<string[]>([]);

  const toggleDietary = (id: string) => {
    setActiveDietary(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredItems = MENU_ITEMS.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const dietaryMatch = activeDietary.length === 0 || activeDietary.every(d => item.dietary.includes(d));
    return categoryMatch && dietaryMatch;
  });

  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-6">Culinary Excellence in Every Bite</h3>
          <p className="text-orange-900/60 max-w-2xl mx-auto text-lg">
            Explore our curated selection of seasonal dishes crafted with the freshest locally sourced ingredients.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-orange-50 rounded-full border border-orange-100">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                  activeCategory === cat 
                    ? "bg-orange-600 text-white shadow-md" 
                    : "text-orange-900 hover:bg-orange-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {DIETARY_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleDietary(filter.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                  activeDietary.includes(filter.id)
                    ? "bg-orange-100 border-orange-300 text-orange-700"
                    : "border-orange-100 text-orange-900/60 hover:border-orange-200"
                )}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-orange-50/30 rounded-3xl overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-serif font-bold text-orange-950">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-sm text-orange-900/70 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex gap-2">
                    {item.dietary.map(d => (
                      <span key={d} className="bg-orange-100 text-orange-600 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                        {DIETARY_FILTERS.find(f => f.id === d)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};