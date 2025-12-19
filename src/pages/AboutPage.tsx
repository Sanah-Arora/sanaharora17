import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";
import sanahProfessional from "@/assets/sanah-professional.jpeg";
import mindGarden from "@/assets/mind-garden.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
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
              About Me
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Who am I?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A counselling psychologist working at the intersection of emotional health, relational patterns, and sociocultural context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={sanahProfessional}
                  alt="Sanah Arora in professional setting"
                  className="rounded-2xl shadow-soft w-full object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-3 shadow-card">
                  <img
                    src={mindGarden}
                    alt="The Mind Garden"
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-foreground leading-relaxed text-lg">
                I am a trained counselling psychologist with experience in individual therapy, case formulation, and long-term psychological work. I work with adults who are struggling with anxiety, low mood, trauma-related concerns, grief, self-esteem issues, and relationship patterns that feel hard to break.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My work is informed by evidence-based therapeutic approaches such as Cognitive Behaviour Therapy (CBT), schema-informed therapy, exposure-based work, and attachment-focused interventions. I place strong emphasis on understanding how your experiences—especially early relationships and stressful life events—continue to shape your emotional responses and coping strategies today.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alongside my clinical work, I have an academic background in trauma research, including postgraduate research on adverse childhood experiences, body image, and self-compassion. This allows me to bring both depth and structure into therapy—without making the space feel clinical or overwhelming.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-medium italic font-display text-lg">
                  "I believe therapy should feel thoughtful, respectful, and collaborative—not rushed, judgmental, or prescriptive."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
          >
            What Guides My Work
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion First",
                description:
                  "Every session is grounded in empathy and non-judgment. Your experiences are valid, and healing happens at your own pace.",
              },
              {
                icon: GraduationCap,
                title: "Evidence-Based",
                description:
                  "My approach draws from proven therapeutic modalities, ensuring that our work together is both structured and effective.",
              },
              {
                icon: Lightbulb,
                title: "Cultural Awareness",
                description:
                  "I understand the unique challenges of navigating mental health in the Indian context—stigma, family dynamics, and societal expectations.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-card rounded-xl p-8 shadow-card"
              >
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-light">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Whether you're seeking clarity, healing, or just someone to listen—I'm here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/approach">Learn About My Approach</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
