import { Motion } from '@/components/motion';

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'Leaf',
      title: 'Farm Fresh Produce',
      description: 'Direct from local farms, ensuring the freshest fruits and vegetables.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Premium Quality Products',
      description: 'Rigorous quality checks for every product we stock.',
    },
    {
      icon: 'Truck',
      title: 'Fast Home Delivery',
      description: 'Get your groceries delivered within hours across HSR Layout.',
    },
    {
      icon: 'PriceTag2',
      title: 'Affordable Prices',
      description: 'Premium quality at competitive prices for your everyday needs.',
    },
    {
      icon: 'Globe',
      title: 'Imported Goods',
      description: 'Wide selection of international products and specialty items.',
    },
    {
      icon: 'MapPin',
      title: 'Trusted Local Store',
      description: 'Serving the HSR Layout community with pride and dedication.',
    },
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
            Why Choose My Market
          </h2>
        </Motion>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Motion
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-4 text-center p-6 bg-muted/50 rounded-lg border border-border/50">
                {/* Icon placeholder */}
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                  {/* In a real app, we'd use Lucide icons here */}
                  <span className="text-primary">{feature.icon.substring(0, 1)}</span>
                </div>
                <h3 className="font-semibold text-lg text-primary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}