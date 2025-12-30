import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Layers,
  Shield,
  Clock,
  CheckCircle2,
  Phone,
} from "lucide-react";

const modalities = [
  {
    name: "Cognitive Behaviour Therapy (CBT)",
    description: "Understanding and reshaping thought patterns that influence emotions and behavior.",
  },
  {
    name: "Schema-Informed Therapy",
    description: "Exploring deep-rooted patterns formed in early life that affect current relationships.",
  },
  {
    name: "Exposure and Response Prevention (ERP)",
    description: "Gradually facing fears and building tolerance for uncertainty and discomfort.",
  },
  {
    name: "Attachment-Based Work",
    description: "Understanding how early bonds shape your sense of self and relationships.",
  },
];

const concerns = [
  "Anxiety, chronic worry, or overthinking",
  "Low mood, emptiness, or emotional exhaustion",
  "Trauma and difficult childhood experiences",
  "Grief and loss",
  "Obsessive thoughts and compulsive behaviours",
  "Low self-esteem and harsh self-criticism",
  "Body image concerns and shame",
  "Relationship and attachment difficulties",
  "Life transitions and identity-related stress",
];

export default function ApproachPage() {
  return (
    <div className="pt-24">
      {/* 1. My Approach - Opening Section */}
      <section className="py-16 gradient-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              My Approach
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Therapy That Meets You Where You Are
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach is integrative and trauma-informed, combining evidence-based techniques with deep respect for your unique story. Therapy is not about labels or quick solutions. It's about understanding yourself and creating space for change in a way that feels emotionally safe and true to who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. How Therapy With Me Works - Four Pillars */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How Therapy With Me Works
            </h2>
            <p className="text-muted-foreground">
              Here's what you can expect from our sessions together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Understanding Patterns",
                text: "We first work to understand you & where you come from, not just symptoms",
              },
              {
                icon: Brain,
                title: "Collaborative Process",
                text: "Therapy is collaborative, you're not being 'fixed'",
              },
              {
                icon: Shield,
                title: "Balanced Approach",
                text: "Sessions balance emotional exploration with practical tools",
              },
              {
                icon: Clock,
                title: "Your Pace",
                text: "We move at a pace that feels safe, but not stagnant",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who I Work With */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center">
              Who I Work With
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              I work with adults (18+) who may be experiencing:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {concerns.map((concern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{concern}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-center mt-8 italic"
            >
              If something feels familiar here, that recognition alone is a meaningful first step.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. Modalities I Draw From */}
      <section className="py-20 bg-primary-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Modalities I Draw From
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {modalities.map((mod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {mod.name}
                </h3>
                <p className="text-muted-foreground text-sm">{mod.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/30 text-center">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                You don't need to know these terms to benefit from therapy. They guide my work to ensure that sessions are structured, ethical, and effective, tailored to your needs & goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Gentle Support CTA - Before FAQs */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you're unsure whether therapy is right for you, you're welcome to book a brief 15-minute consultation to ask questions and see if working together feels aligned.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/booking">Book a Free 15-Minute Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Feels Too Unfamiliar?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              It's completely normal to have questions about therapy. Explore answers to common concerns.
            </p>
            <Button asChild variant="soft" size="lg">
              <Link to="/faqs">Read the FAQs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 7. Ethics, Safety & Transparency */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              Ethics, Safety & Transparency
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Confidential and ethical practice
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Informed consent before therapy begins
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Clear boundaries and referral when needed
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Not a substitute for psychiatric or emergency care
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  Referrals provided when concerns fall outside scope
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Book Your First Session - Closing CTA */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8">
              Taking the first step can feel uncertain, but you don't have to have it all figured out. I'm here to help you find your way.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/booking">Book Your First Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 9. Crisis Support - Footer-Style */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-medium text-foreground text-sm uppercase tracking-wide">
                Crisis Support
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you're in immediate distress or experiencing a mental health crisis, please reach out to a crisis helpline or visit your nearest emergency room. In India, you can contact iCall at 9152987821 or Vandrevala Foundation at 1860-2662-345.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
