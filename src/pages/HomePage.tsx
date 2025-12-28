import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Users, Leaf } from "lucide-react";
import sanahPortrait from "@/assets/sanah-portrait.jpeg";
import keepGrowing from "@/assets/keep-growing.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const concerns = [
  { icon: Brain, text: "Anxiety & Overthinking" },
  { icon: Heart, text: "Trauma & Grief" },
  { icon: Users, text: "Relationship Patterns" },
  { icon: Leaf, text: "Self-Esteem & Growth" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen gradient-hero flex items-center pt-24 pb-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="order-2 lg:order-1"
            >
              <motion.p
                variants={fadeInUp}
                className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
              >
                Counselling Psychologist • delhi
                
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
              >
                Support for when things feel{" "}
                <span className="text-primary italic">heavy, confusing,</span> or{" "}
                <span className="text-primary italic">stuck.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              >
                Compassionate, evidence-based counselling for anxiety, depression, grief, relational and workplace issues. A space that feels safe, mindful, and yours.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative mx-auto max-w-xs lg:max-w-sm">
                {/* Keep Growing image - now bigger */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={keepGrowing}
                    alt="Keep Going, Keep Growing"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                {/* Accent shape */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section with Portrait */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                I'm Sanah Arora
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A counselling psychologist offering trauma-informed therapy for adults navigating emotional distress, relational challenges, and the impact of past experiences. My approach is grounded in psychological science, shaped by cultural awareness, and centred on helping you make sense of your inner world at your pace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-10"
            >
              <div className="relative max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={sanahPortrait}
                    alt="Sanah Arora - Counselling Psychologist"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Who I Work With
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I work with adults (18+) navigating a range of emotional and relational challenges
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {concerns.map((concern, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="gradient-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <concern.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {concern.text}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Including anxiety, low mood, obsessive thoughts, body image concerns, life transitions, and more.
            </p>
            <Button asChild variant="soft">
              <Link to="/approach">Explore My Approach</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Low-Cost Therapy Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="gradient-card rounded-2xl p-8 shadow-card border border-primary/20">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4 text-center">
                Low-Cost Therapy & Accessibility
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-center">
                Low-cost therapy slots are intended for individuals experiencing genuine financial constraints, such as students, early-career professionals, or those between jobs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-center">
                A minimum fee of ₹250 onwards is set to ensure commitment. Sessions are offered with the same care and professionalism as standard sessions.  Those who are able to contribute more are encouraged to do so at a personally sustainable level, helping support the continuation of reduced-fee work. 
              </p>
              <p className="text-sm text-primary italic text-center font-medium">
                "Needing financial flexibility does not reflect your worth, seriousness, or readiness for therapy."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Take the First Step CTA */}
      <section className="py-20 gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/90" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Take the First Step
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Starting therapy can feel daunting. Whether you're seeking clarity, healing, or just someone to listen - you don't have to figure it out alone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="xl"
                className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <Link to="/faqs">Read FAQs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethics Banner */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              "Confidential & Ethical Practice",
              "Informed Consent",
              "Clear Boundaries",
              "Referrals When Needed",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
