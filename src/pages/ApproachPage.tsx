import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Layers,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

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
      {/* Hero */}
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
              How Therapy With Me Works
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach is integrative and trauma-informed, combining evidence-based techniques with deep respect for your unique story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Understanding Patterns",
                text: "We first work to understand your patterns, not just symptoms",
              },
              {
                icon: Brain,
                title: "Collaborative Process",
                text: "Therapy is collaborative—you're not being 'fixed'",
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
                className="bg-background rounded-xl p-6 border border-border hover:shadow-soft transition-all duration-300"
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

      {/* Modalities */}
      <section className="py-20 bg-background">
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
            <p className="text-muted-foreground">
              You don't need to know these terms to benefit from therapy. They guide my work so that sessions are structured, ethical, and effective.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modalities.map((mod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-card rounded-xl p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {mod.name}
                </h3>
                <p className="text-muted-foreground text-sm">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 bg-primary-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Who I Work With
              </h2>
              <p className="text-muted-foreground mb-8">
                I work with adults (18+) who may be experiencing:
              </p>
              <div className="grid gap-3">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <h3 className="font-display text-xl font-medium text-foreground mb-4">
                Ethics, Safety & Transparency
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>• Confidential and ethical practice</p>
                <p>• Informed consent before therapy begins</p>
                <p>• Clear boundaries and referral when needed</p>
                <p>• Not a substitute for psychiatric or emergency care</p>
                <p>• Referrals provided when concerns fall outside scope</p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Button asChild variant="hero" className="w-full">
                  <Link to="/booking">Book Your First Session</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
