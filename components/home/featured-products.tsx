import Image from 'next/image';
import Link from 'next/link';
import { Motion } from '@/components/motion';

export default function FeaturedProducts() {
  const products = [
    { name: 'Organic Tomatoes', price: '₹80/kg', image: 'https://images.unsplash.com/photo-1546466379-6601cf35bf7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Alphonso Mangoes', price: '₹250/kg', image: 'https://images.unsplash.com/photo-1582109308837-5890e15cba83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Fresh Chicken', price: '₹180/kg', image: 'https://images.unsplash.com/photo-1587739230233-4c8f4f4b3a9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Atlantic Salmon', price: '₹650/kg', image: 'https://images.unsplash.com/photo-1569804614798-6a0ecd2c8a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Imported Cheese', price: '₹450/200g', image: 'https://images.unsplash.com/photo-1574403819937-a9a8b546d2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Fresh Milk', price: '₹65/l', image: 'https://images.unsplash.com/photo-1589120475623-9c9ac007f458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <Motion
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-primary">
            Featured Products
          </h2>
        </Motion>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Motion
              key={product.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-lg border border-border/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-lg"
                />
                <h3 className="font-semibold text-lg text-primary">{product.name}</h3>
                <p className="text-lg font-bold text-primary">{product.price}</p>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                    Add to Cart
                  </button>
                  <button className="flex items-center justify-center rounded-md border border-primary/50 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/50 transition-colors">
                    <span className="mr-2">♡</span> Wishlist
                  </button>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}