import Image from 'next/image';
import Link from 'next/link';
import { Motion } from '@/components/motion';

export default function Categories() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white pt-[6rem] pb-[8rem]">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary">
                Shop by Category
              </h1>
              <p className="mb-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Explore our wide range of premium groceries and fresh produce.
              </p>
            </div>
          </Motion>

          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c5530079b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Supermarket shelves"
              fill
              className="object-cover opacity-20"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-12 text-3xl font-bold text-center text-primary">
              Our Product Categories
            </h2>
          </Motion>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Fruits */}
            <Motion
              key="fruits"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1561347505-60e6e3f7101a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Fresh fruits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Fruits</h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh, seasonal fruits sourced daily
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Vegetables */}
            <Motion
              key="vegetables"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Fresh vegetables"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Vegetables</h3>
                  <p className="text-sm text-muted-foreground">
                    Farm-fresh vegetables and greens
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Grocery */}
            <Motion
              key="grocery"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c5530079b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Grocery essentials"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Grocery</h3>
                  <p className="text-sm text-muted-foreground">
                    Staples, snacks, and pantry essentials
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Dairy */}
            <Motion
              key="dairy"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1574802682053-6ebe2f21d376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Dairy products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Dairy</h3>
                  <p className="text-sm text-muted-foreground">
                    Milk, cheese, yogurt, and more
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Bakery */}
            <Motion
              key="bakery"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1586444248902-2f6c0ce2bb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Bakery items"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Bakery</h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh bread, pastries, and cakes
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Organic */}
            <Motion
              key="organic"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1505254308887-70d916802e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Organic products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Organic Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified organic produce and groceries
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Meat */}
            <Motion
              key="meat"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Fresh meat"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Meat</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium cuts of chicken, mutton, and more
                  </p>
                </div>
              </Link>
            </Motion>

            {/* Seafood */}
            <Motion
              key="seafood"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Link
                href="#"
                className="group block overflow-hidden rounded-lg border border-border/50 hover:bg-primary/5 transition-colors"
              >
                <Image
                  src="https://images.unsplash.com/photo-1553621042-f6e14724659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Fresh seafood"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-primary">Seafood</h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh fish, prawns, and seafood delicacies
                  </p>
                </div>
              </Link>
            </Motion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <h2 className="mb-6 text-3xl font-bold">Ready to Shop Premium Groceries?</h2>
              <p className="mb-8 text-lg text-primary/90 max-w-xl mx-auto">
                Experience the My Market difference - freshness you can taste, quality you can trust.
              </p>
            </div>
          </Motion>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="flex items-center justify-center whitespace-nowrap rounded-md border border-primary/50 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Browse All Products
            </Link>
            <Link
              href="tel:+919972813578"
              className="flex items-center justify-center whitespace-nowrap rounded-md border border-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Call to Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}