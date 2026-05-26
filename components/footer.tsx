import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:py-16 mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">My Market</h3>
            <p className="text-muted-foreground">
              Premium supermarket in HSR Layout, Bangalore offering fresh groceries,
              organic produce, imported foods, and fast home delivery.
            </p>
            <div className="flex mt-4 space-x-3">
              <a href="https://wa.me/919972813578" className="hover:text-primary-foreground/80 transition-colors">
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="tel:+919972813578" className="hover:text-primary-foreground/80 transition-colors">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground hover:text-primary-foreground transition-colors">
              <li><Link href="/" className="block">Home</Link></li>
              <li><Link href="/categories" className="block">Categories</Link></li>
              <li><Link href="/about" className="block">About</Link></li>
              <li><Link href="/delivery" className="block">Delivery</Link></li>
              <li><Link href="/contact" className="block">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-muted-foreground hover:text-primary-foreground transition-colors">
              <li><Link href="#" className="block">Fruits</Link></li>
              <li><Link href="#" className="block">Vegetables</Link></li>
              <li><Link href="#" className="block">Grocery</Link></li>
              <li><Link href="#" className="block">Dairy</Link></li>
              <li><Link href="#" className="block">Bakery</Link></li>
              <li><Link href="#" className="block">Organic</Link></li>
              <li><Link href="#" className="block">Meat</Link></li>
              <li><Link href="#" className="block">Seafood</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-muted-foreground mb-2">
              <span className="whitespace-nowrap">1703, 19th Main Road,</span>
            </p>
            <p className="text-muted-foreground mb-2">
              <span className="whitespace-nowrap">Sector 2, HSR Layout,</span>
            </p>
            <p className="text-muted-foreground mb-2">
              Bengaluru, Karnataka 560102
            </p>
            <p className="text-muted-foreground mb-4">
              <span className="whitespace-nowrap">+91 9972813578</span>
            </p>
            <p className="text-muted-foreground">
              <span className="whitespace-nowrap">info@mymarketblr.com</span>
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} My Market. All rights reserved.
        </div>
      </div>
    </footer>
  );
}