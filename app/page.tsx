import Image from 'next/image';
import Link from 'next/link';
import { Motion } from '@/components/motion';
import Hero from '@/components/home/hero';
import WhyChooseUs from '@/components/home/why-choose-us';
import ProductCategories from '@/components/home/product-categories';
import FeaturedProducts from '@/components/home/featured-products';
import DeliverySection from '@/components/home/delivery-section';
import Testimonials from '@/components/home/testimonials';
import Newsletter from '@/components/home/newsletter';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProducts />
      <DeliverySection />
      <Testimonials />
      <Newsletter />
    </main>
  );
}