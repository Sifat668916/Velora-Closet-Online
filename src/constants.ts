/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  'Shirt',
  'T shirt',
  'pant',
  'Dropsholder',
  'baggy pants',
  'old money shirts'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Strategic White Linen',
    price: 89,
    description: 'A breathable classic white linen shirt perfect for summer evenings and professional settings.',
    category: 'Shirt',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '2',
    name: 'Monolith Cotton Tee',
    price: 35,
    description: 'High-quality 100% organic cotton T-shirt with a refined slim fit.',
    category: 'T shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Architect Chino',
    price: 120,
    description: 'Perfectly tailored chino pants in a versatile sand color, made from premium stretch cotton.',
    category: 'pant',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Heirloom Dropsholder',
    price: 150,
    description: 'An oversized comfortable dropsholder hoodie with a heavy-weight fabric feel.',
    category: 'Dropsholder',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Legacy Baggy Trousers',
    price: 110,
    description: 'Modern wide-leg trousers that bridge the gap between comfort and high-fashion.',
    category: 'baggy pants',
    image: 'https://images.unsplash.com/photo-1541099649105-f6d8c367c5cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Vintage Estate Shirt',
    price: 180,
    description: 'A vintage-inspired shirt with gold-tone hardware and equestrian patterns.',
    category: 'old money shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  // Added products
  {
    id: '7',
    name: 'Obsidian Overshirt',
    price: 95,
    description: 'Heavyweight black cotton overshirt for layered tactical looks.',
    category: 'Shirt',
    image: 'https://images.unsplash.com/photo-1550995694-3f5f4a7b1bd2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Drafting Tee',
    price: 40,
    description: 'A technical tee designed for movement and silhouette.',
    category: 'T shirt',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '9',
    name: 'Foundry Trousers',
    price: 135,
    description: 'Heavy canvas trousers built for longevity.',
    category: 'pant',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '10',
    name: 'Stratus Dropsholder',
    price: 145,
    description: 'Lightweight dropsholder knit for transitions.',
    category: 'Dropsholder',
    image: 'https://images.unsplash.com/photo-1521312175822-637ae6244368?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '11',
    name: 'Nomad Baggy',
    price: 125,
    description: 'Loose fit nomadic inspired trousers.',
    category: 'baggy pants',
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '12',
    name: 'Crested Silk Shirt',
    price: 210,
    description: 'Pure silk with hand-painted family crests.',
    category: 'old money shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '13',
    name: 'Ivory Oxford',
    price: 85,
    description: 'Pre-washed ivory oxford button-down.',
    category: 'Shirt',
    image: 'https://images.unsplash.com/photo-1621072156002-e2fcced0b170?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '14',
    name: 'Graphic Archive Tee',
    price: 45,
    description: 'Limited edition archival print on heavy cotton.',
    category: 'T shirt',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '15',
    name: 'Pleated Strategic Pant',
    price: 155,
    description: 'Double pleated wool blend for formal operations.',
    category: 'pant',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '16',
    name: 'Void Dropsholder',
    price: 160,
    description: 'Black out heavy fleece dropsholder.',
    category: 'Dropsholder',
    image: 'https://images.unsplash.com/photo-1556821840-06cf484f7b60?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '17',
    name: 'Denim Baggy Arch',
    price: 140,
    description: 'Architectural denim in a wide relaxed cut.',
    category: 'baggy pants',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '18',
    name: 'Regatta Classic Tunic',
    price: 195,
    description: 'Nautical inspired long-form shirt.',
    category: 'old money shirts',
    image: 'https://images.unsplash.com/photo-1594932224491-99419579ba76?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '19',
    name: 'Charcoal Minimal Shirt',
    price: 90,
    description: 'Modern charcoal shirt with hidden buttons.',
    category: 'Shirt',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '20',
    name: 'Heavy Box Tee',
    price: 50,
    description: 'Oversized boxy fit tee for structural looks.',
    category: 'T shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '21',
    name: 'Slate Cargo Pant',
    price: 145,
    description: 'Refined cargo pockets for low-profile utility.',
    category: 'pant',
    image: 'https://images.unsplash.com/photo-1517441113009-4479905c108c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '22',
    name: 'Crimson Dropsholder',
    price: 155,
    description: 'Deep crimson heavy knit for statement days.',
    category: 'Dropsholder',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '23',
    name: 'Velvet Baggy Luxe',
    price: 220,
    description: 'Corduroy-velvet blend wide trousers.',
    category: 'baggy pants',
    image: 'https://images.unsplash.com/photo-1541099649105-f6d8c367c5cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '24',
    name: 'Polo Club Silk',
    price: 240,
    description: 'Elite polo club official leisure shirt.',
    category: 'old money shirts',
    image: 'https://images.unsplash.com/photo-1626497748470-281dc3d6291a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '25',
    name: 'Suede Utility Shirt',
    price: 280,
    description: 'Ultra-soft vegan suede shirt-jacket.',
    category: 'Shirt',
    image: 'https://images.unsplash.com/photo-1618354721011-2c70ed7cd701?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '26',
    name: 'Acid Wash Tee',
    price: 55,
    description: 'Distressed technical tee for urban use.',
    category: 'T shirt',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '27',
    name: 'Grey Work Pant',
    price: 130,
    description: 'Industrial durability with executive finish.',
    category: 'pant',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '28',
    name: 'Skyline Dropsholder',
    price: 170,
    description: 'Cyan blue heavy fleece dropsholder.',
    category: 'Dropsholder',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '29',
    name: 'Linen Baggy Breeze',
    price: 135,
    description: 'Linen wide trousers for high-heat mobility.',
    category: 'baggy pants',
    image: 'https://images.unsplash.com/photo-1541099649105-f6d8c367c5cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '30',
    name: 'Manor House Stripe',
    price: 185,
    description: 'Classic vertical stripe in muted royal palette.',
    category: 'old money shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800'
  }
];
