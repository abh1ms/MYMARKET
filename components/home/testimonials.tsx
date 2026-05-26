import { Motion } from '@/components/motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'HSR Layout',
      rating: 5,
      comment: 'The quality of fruits and vegetables is unmatched. I get my weekly grocery from My Market and never disappointed.',
    },
    {
      name: 'Rajiv Kumar',
      location: 'Koramangala',
      rating: 5,
      comment: 'Fast delivery and excellent service. Their organic section is impressive and prices are fair.',
    },
    {
      name: 'Ananya Reddy',
      location: 'BTM Layout',
      rating: 5,
      comment: 'I love their imported foods section. Found some rare ingredients for my Italian recipes. Highly recommend!',
    },
    {
      name: 'Vikram Singh',
      location: 'Whitefield',
      rating: 5,
      comment: 'Best supermarket in Bangalore for premium products. The staff is helpful and the store is always clean.',
    },
    {
      name: 'Sneha Patel',
      location: 'Marathahalli',
      rating: 5,
      comment: 'Their home delivery is a lifesaver for working professionals like me. Always on time and products are fresh.',
    },
    {
      name: 'Arjun Mehta',
      location: 'Electronic City',
      rating: 5,
      comment: 'Great variety of dairy and bakery items. Their fresh bread and pastries are amazing. Will keep coming back.',
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
            What Our Customers Say
          </h2>
        </Motion>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion
              key={testimonial.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="p-6 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>{star <= testimonial.rating ? '★' : '☆'}</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <span className="font-medium">{testimonial.name}</span>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}