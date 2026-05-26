import { Motion } from '@/components/motion';

export default function DeliverySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <Motion
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Fresh Groceries Delivered Fast
            </h2>
            <p className="mb-8 text-lg text-muted-foreground max-w-xl mx-auto">
              Free Delivery Available in HSR Layout
            </p>
          </div>
        </Motion>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <Motion
            key="step1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-full">
                <span className="text-primary">1</span>
              </div>
              <h3 className="font-semibold text-lg text-primary">Place Order</h3>
              <p className="text-sm text-muted-foreground">
                Browse our premium selection and add to cart
              </p>
            </div>
          </Motion>

          <Motion
            key="step2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-full">
                <span className="text-primary">2</span>
              </div>
              <h3 className="font-semibold text-lg text-primary">We Pack Fresh</h3>
              <p className="text-sm text-muted-foreground">
                Carefully selected and packed for quality
              </p>
            </div>
          </Motion>

          <Motion
            key="step3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-full">
                <span className="text-primary">3</span>
              </div>
              <h3 className="font-semibold text-lg text-primary">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Delivered to your doorstep in HSR Layout
              </p>
            </div>
          </Motion>

          <Motion
            key="step4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-full">
                <span className="text-primary">4</span>
              </div>
              <h3 className="font-semibold text-lg text-primary">Enjoy Quality</h3>
              <p className="text-sm text-muted-foreground">
                Fresh, premium groceries every time
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}