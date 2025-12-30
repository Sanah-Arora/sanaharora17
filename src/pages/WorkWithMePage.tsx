import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  BookOpen,
  Users,
  Pen,
  Heart,
  Mail,
} from "lucide-react";
import Timeline from "@/components/Timeline";

const collaborations = [
  {
    icon: Briefcase,
    title: "Counselling Roles",
    description: "Positions in clinics and mental health organisations",
  },
  {
    icon: BookOpen,
    title: "Research Projects",
    description: "Research-informed mental health initiatives",
  },
  {
    icon: Users,
    title: "Workshops & Groups",
    description: "Psychoeducation workshops and group sessions",
  },
  {
    icon: Pen,
    title: "Writing & Content",
    description: "Content development and mental health advocacy",
  },
  {
    icon: Heart,
    title: "Community Initiatives",
    description: "Pro bono and low-cost community mental health work",
  },
];

export default function WorkWithMePage() {
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
              Professional Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Work With Me
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open to collaborations, counselling roles, research projects, and community mental health initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education, Experience & Certifications Timeline */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Education, Experience & Certifications
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              My professional journey in mental health
            </p>
          </motion.div>

          <Timeline />
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-foreground text-center mb-4"
          >
            Professional Collaborations & Roles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
          >
            I am open to various professional opportunities in the mental health space
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {collaborations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-soft hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/90" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Mail className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Professional Inquiries
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              For collaborations, counselling roles, research projects, or other professional inquiries, please reach out via email.
            </p>
            <Button
              asChild
              variant="secondary"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="mailto:Sanaharora1710@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Sanaharora1710@gmail.com
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
