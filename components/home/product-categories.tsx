import Image from 'next/image';
import Link from 'next/link';
import { Motion } from '@/components/motion';

export default function ProductCategories() {
  const categories = [
    { name: 'Fruits', image: 'https://images.unsplash.com/photo-1561347505-60e6e3f7101a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Vegetables', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Grocery', image: 'https://images.unsplash.com/photo-1542838132-92c5530079b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Dairy', image: 'https://images.unsplash.com/photo-1574802682053-6ebe2f21d376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Bakery', image: 'https://images.unsplash.com/photo-1586444248902-2f6c0ce2bb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Organic Products', image: 'https://images.unsplash.com/photo-1505254308887-70d916802e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Meat', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { name: 'Seafood', image: 'https://images.unsplash.com/photo-1553621042-f6e14724659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
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
            Shop by Category
          </h2>
        </Motion>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Motion
              key={category.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">{category.name}</h3>
                </div>
              </Link>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}