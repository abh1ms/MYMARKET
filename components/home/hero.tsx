import Image from 'next/image';
import Link from 'next/link';
import { Motion } from '@/components/motion';

export default function Hero() {
  return (
    <section className="relative bg-white pt-[6rem] pb-[8rem]">
      <div className="container px-4 mx-auto">
        <Motion
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary">
              Freshness Delivered to Your Doorstep
            </h1>
            <p className="mb-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Premium groceries, fresh fruits, vegetables, dairy, meat, seafood,
              and daily essentials delivered across HSR Layout.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/categories"
                className="flex items-center justify-center whitespace-nowrap rounded-md border border-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Shop Now
              </Link>
              <Link
                href="tel:+919972813578"
                className="flex items-center justify-center whitespace-nowrap rounded-md border border-primary/50 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Call Us
              </Link>
            </div>
          </div>
        </Motion>

        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c5530079b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Fresh vegetables and fruits"
            fill
            className="object-cover opacity-30"
          />
        </div>
      </div>
    </section>
  );
}