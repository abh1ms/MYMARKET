import Link from 'next/link';
import { Motion } from '@/components/motion';

export default function Contact() {
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
                Contact Us
              </h1>
              <p className="mb-6 text-lg text-muted-foreground max-w-xl mx-auto">
                We'd love to hear from you. Visit our store or get in touch.
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

      {/* Store Info & Map */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Visit Our Store
            </h2>
          </Motion>
          <div className="grid gap-8 md:grid-cols-2">
            <Motion
              key="store-info"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Store Location</h3>
                    <p className="text-muted-foreground">
                      1703, 19th Main Road,<br />
                      Sector 2, HSR Layout,<br />
                      Bengaluru, Karnataka 560102
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                    <span className="text-primary">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Phone Number</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919972813578" className="text-primary hover:underline">
                        +91 9972813578
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                    <span className="text-primary">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Business Hours</h3>
                    <p className="text-muted-foreground">
                      8:00 AM – 10:00 PM<br />
                      Open 7 days a week
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                    <span className="text-primary">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Website</h3>
                    <p className="text-muted-foreground">
                      <a href="https://mymarketblr.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        mymarketblr.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-full">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@mymarketblr.com" className="text-primary hover:underline">
                        info@mymarketblr.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Motion>

            <Motion
              key="map"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-border/50">
                {/* Google Maps Embed - replace with actual embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.572249228648!2d77.62610827456708!3d12.91060189112361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1570c9df62ef%3A0x2b80e040bb3b791c!2s1703%2C%2019th%20Main%20Road%2C%20Sector%202%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1716734567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </Motion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Send Us a Message
            </h2>
          </Motion>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <Motion
                key="name"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-primary/50 px-4 py-3 bg-muted/0 text-muted-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    required
                  />
                </div>
              </Motion>

              <Motion
                key="email"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div>
                  <label htmlFor="email" className="mb-2 block font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-primary/50 px-4 py-3 bg-muted/0 text-muted-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    required
                  />
                </div>
              </Motion>

              <Motion
                key="subject"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <label htmlFor="subject" className="mb-2 block font-medium text-muted-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full rounded-md border border-primary/50 px-4 py-3 bg-muted/0 text-muted-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    required
                  />
                </div>
              </Motion>

              <Motion
                key="message"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <label htmlFor="message" className="mb-2 block font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full rounded-md border border-primary/50 px-4 py-3 bg-muted/0 text-muted-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    required
                  />
                </div>
              </Motion>

              <Motion
                key="submit"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </Motion>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <Motion
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-center text-primary">
              Frequently Asked Questions
            </h2>
          </Motion>
          <div className="max-w-xl mx-auto space-y-4">
            <Motion
              key="faq1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border border-border/50 rounded-lg">
                <button
                  className="w-full flex items-center justify-between p-5 text-left text-muted-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Do you offer home delivery?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hidden p-5 text-muted-foreground">
                  Yes! We offer free home delivery within HSR Layout for orders above ₹500. For other areas, delivery charges apply based on distance.
                </div>
              </div>
            </Motion>

            <Motion
              key="faq2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="border border-border/50 rounded-lg">
                <button
                  className="w-full flex items-center justify-between p-5 text-left text-muted-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>What payment methods do you accept?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hidden p-5 text-muted-foreground">
                  We accept cash, credit/debit cards (Visa, Mastercard, RuPay), UPI, Paytm, PhonePe, and Google Pay.
                </div>
              </div>
            </Motion>

            <Motion
              key="faq3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="border border-border/50 rounded-lg">
                <button
                  className="w-full flex items-center justify-between p-5 text-left text-muted-foreground hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Are your products organic?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hidden p-5 text-muted-foreground">
                  We have a dedicated organic section with certified organic produce, groceries, and personal care items. Look for the organic label on products.
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </section>
    </main>
  );
}