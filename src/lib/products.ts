import { PlaceHolderImages } from './placeholder-images';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Experience immersive sound with these noise-cancelling headphones.',
    price: 99.99,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-1')?.imageUrl || 'https://picsum.photos/seed/1/600/400',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-1')?.imageHint || 'headphones',
  },
  {
    id: '2',
    name: 'Urban Backpack',
    description: 'A stylish and durable backpack for your daily commute and travels.',
    price: 79.99,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-2')?.imageUrl || 'https://picsum.photos/seed/2/600/400',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-2')?.imageHint || 'backpack',
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Track your fitness and stay connected with this sleek smartwatch.',
    price: 199.99,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-3')?.imageUrl || 'https://picsum.photos/seed/3/600/400',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-3')?.imageHint || 'smartwatch',
  },
  {
    id: '4',
    name: 'Ergonomic Chair',
    description: 'Improve your posture and comfort with this modern ergonomic chair.',
    price: 249.99,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-4')?.imageUrl || 'https://picsum.photos/seed/4/600/400',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-4')?.imageHint || 'office chair',
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    description: 'Enjoy a superior typing experience with this mechanical keyboard.',
    price: 129.99,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-5')?.imageUrl || 'https://picsum.photos/seed/5/600/400',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-5')?.imageHint || 'keyboard',
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with high-fidelity sound for any occasion.',
    price: 49.99,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-6')?.imageUrl || 'https://picsum.photos/seed/6/600/400',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-6')?.imageHint || 'bluetooth speaker',
  },
];
