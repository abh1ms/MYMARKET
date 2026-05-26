import { Motion } from '@/components/motion';

export default function Newsletter() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <Motion
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold">Stay Updated with Fresh Offers</h2>
            <p className="mb-8 text-lg text-primary/90 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new arrivals, and healthy living tips.
            </p>
          </div>
        </Motion>

        <div className="max-w-lg mx-auto space-y-4">
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-md border border-primary/50 px-4 py-3 bg-primary/10 text-primary-foreground placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
          <p className="text-center text-sm text-primary/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}