import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Clock,
  Calendar,
  CreditCard,
} from "lucide-react";

export default function BookingPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Let's Talk About It
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Book a Session
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Starting therapy can feel daunting. This page is meant to make the
              process simple and transparent. Click below to book a session or
              request a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <h2 className="font-display text-xl font-medium text-foreground mb-8 text-center">
            How Booking Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                step: "1",
                title: "Fill out the booking form",
                desc: "Choose between a free consultation or a therapy session",
              },
              {
                icon: Clock,
                step: "2",
                title: "Receive a response",
                desc: "You'll hear back within 24–48 hours",
              },
              {
                icon: Calendar,
                step: "3",
                title: "Session details shared",
                desc: "Timing, format, and next steps will be emailed",
              },
              {
                icon: CreditCard,
                step: "4",
                title: "Session confirmed",
                desc: "Therapy sessions confirmed after payment",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-background">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-10 shadow-card"
          >
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Ready to Book?
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Click the button below to book a therapy session or request a
              15-minute free consultation. You’ll be redirected to a secure
              Google Form.
            </p>

            <a
              href="https://forms.gle/qhtzL6igZQ8SL3Cr7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="hero" size="xl">
                Book Now
              </Button>
            </a>

            <p className="text-xs text-muted-foreground mt-4">
              Opens a Google Form • Response within 24–48 hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
