import Image from 'next/image';
import Link from 'next/link';
import { Motion } from '@/components/motion';

export default function About() {
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
                About My Market
              </h1>
              <p className="mb-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Your premium neighborhood supermarket in HSR Layout, Bangalore.
              </p>
            </div>
          </Motion>

          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c5530079b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Supermarket interior"
              fill
              className="object-cover opacity-20"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Our Story
              </h2>
          </Motion>
          <div className="max-w-2xl mx-auto space-y-6 text-muted-foreground">
            <p>
              My Market was founded in 2020 with a simple vision: to bring the
              finest quality groceries to the residents of HSR Layout and
              surrounding areas. What started as a small neighborhood store has
              grown into a trusted premium supermarket known for its fresh
              produce, organic selections, and exceptional customer service.
            </p>
            <p>
              We believe that every meal deserves the best ingredients, which is
              why we source our fruits and vegetables directly from local farms,
              our dairy from trusted cooperatives, and our imported goods from
              reliable international suppliers. Our commitment to quality and
              freshness has made us a preferred destination for families,
              working professionals, and health-conscious shoppers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Mission & Vision
            </h2>
          </Motion>
          <div className="grid gap-8 md:grid-cols-2">
            <Motion
              key="mission"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 bg-white rounded-lg border border-border/50">
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To provide our community with access to the highest quality
                  groceries at fair prices, while promoting healthy living and
                  sustainable practices.
                </p>
              </div>
            </Motion>

            <Motion
              key="vision"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-6 bg-white rounded-lg border border-border/50">
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To be Bangalore's most trusted premium supermarket, known for
                  innovation in fresh food retail and unwavering commitment to
                  customer satisfaction.
                </p>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Our Quality Commitment
            </h2>
          </Motion>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Motion
              key="quality1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                  <span className="text-primary">🌱</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Farm Fresh</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Direct from local farms, ensuring peak freshness and flavor.
                </p>
              </div>
            </Motion>

            <Motion
              key="quality2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                  <span className="text-primary">🔍</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Rigorous Checks</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Every product undergoes multiple quality checks before reaching
                  our shelves.
                </p>
              </div>
            </Motion>

            <Motion
              key="quality3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                  <span className="text-primary">❄️</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Cold Chain</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Temperature-controlled storage and transport for perishables.
                </p>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Community Focus
            </h2>
          </Motion>
          <div className="grid gap-6 md:grid-cols-2">
            <Motion
              key="community1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Community event"
                className="rounded-lg"
                width={400}
                height={300}
              />
            </Motion>

            <Motion
              key="community2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Supporting Our Community
                </h3>
                <p className="text-muted-foreground">
                  At My Market, we believe in giving back to the community that
                  supports us. We regularly participate in local food drives,
                  support neighborhood events, and partner with local farmers to
                  promote sustainable agriculture.
                </p>
                <p className="text-muted-foreground mt-4">
                  We also offer employment opportunities to local residents and
                  provide training programs to help them grow in the retail
                  sector.
                </p>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Why Customers Trust Us
            </h2>
          </Motion>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Motion
              key="trust1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 bg-muted/50 rounded-lg border border-border/50 text-center">
                <div className="flex h-12 w-12 items-center justify-center mx-auto mb-4 bg-primary/10 rounded-full">
                  <span className="text-primary">⏰</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Consistent Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Same high standards every day, every product.
                </p>
              </div>
            </Motion>

            <Motion
              key="trust2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-6 bg-muted/50 rounded-lg border border-border/50 text-center">
                <div className="flex h-12 w-12 items-center justify-center mx-auto mb-4 bg-primary/10 rounded-full">
                  <span className="text-primary">💚</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Health & Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Strict hygiene protocols and regular sanitization.
                </p>
              </div>
            </Motion>

            <Motion
              key="trust3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-6 bg-muted/50 rounded-lg border border-border/50 text-center">
                <div className="flex h-12 w-12 items-center justify-center mx-auto mb-4 bg-primary/10 rounded-full">
                  <span className="text-primary">🛒</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Convenience</h3>
                <p className="text-sm text-muted-foreground">
                  Easy shopping, multiple payment options, and fast delivery.
                </p>
              </div>
            </Motion>

            <Motion
              key="trust4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="p-6 bg-muted/50 rounded-lg border border-border/50 text-center">
                <div className="flex h-12 w-12 items-center justify-center mx-auto mb-4 bg-primary/10 rounded-full">
                  <span className="text-primary">💬</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">Customer Service</h3>
                <p className="text-sm text-muted-foreground">
                  Friendly, knowledgeable staff ready to assist you.
                </p>
              </div>
            </Motion>
          </div>
        </div>
      </section>
    </main>
  );
}