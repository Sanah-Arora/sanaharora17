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
              A counselling psychologist working at the intersection of emotional
              health, relational patterns, and sociocultural context.
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
              {/* UPDATED ABOUT ME CONTENT */}
              <p className="text-foreground leading-relaxed text-lg">
                I'm Sanah, a counselling psychologist based in Delhi. I work with adults who feel emotionally overwhelmed, stuck in familiar patterns, or unsure about how to move forward. I believe therapy works best when it offers space where experiences are met with patience, care, and genuine curiosity.
              </p>
              
              <p className="text-foreground leading-relaxed text-lg">
                Outside the therapy room, I enjoy travelling, good coffee, and connecting with people from different walks of life. These experiences shape how I approach my work with openness, cultural sensitivity, and a genuine interest in understanding people beyond labels or diagnoses.
              </p>

              <div className="pt-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Education
                </h3>
                <p className="text-foreground leading-relaxed">
                  I hold a Bachelor's degree in Psychology from AUD and a Master's degree in Clinical Psychology from Manipal Academy of Higher Education (MAHE). My academic training has provided a strong foundation in psychological assessment, case formulation, ethics, and evidence-based therapeutic work.
                </p>
                <p className="text-foreground leading-relaxed mt-3">
                  During my postgraduate training, I was also engaged in trauma-focused research, with particular emphasis on adverse childhood experiences, body image, and self-compassion, which continues to inform how I think about emotional distress and healing.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-medium italic font-display text-lg">
                  "I believe therapy should feel thoughtful, respectful, and collaborative; not rushed, judgmental, or prescriptive."
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
                  "I understand the unique challenges of navigating mental health in the Indian context -- stigma, family dynamics, and societal expectations.",
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

      {/* Contact Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Find Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <a
                  href="https://instagram.com/attuned.adults"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Instagram</h3>
                    <p className="text-muted-foreground">@attuned.adults</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sanah-arora-476107213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground">Sanah Arora</p>
                  </div>
                </a>

                <a
                  href="mailto:sanah.arora1710@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">sanah.arora1710@gmail.com</p>
                  </div>
                </a>
              </div>
              
              <div className="flex flex-col items-center justify-center p-8 bg-background rounded-2xl shadow-sm border border-border">
                <h3 className="font-medium text-foreground mb-4">WhatsApp QR Code</h3>
                <img src="/placeholder.svg" alt="WhatsApp QR Code" className="w-48 h-48 rounded-lg shadow-sm mb-4" />
                <p className="text-sm text-muted-foreground text-center">Scan to connect on WhatsApp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA & FAQs */}
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
              Whether you're seeking clarity, healing, or just someone to listen,
              I'm here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/faqs">Frequently Asked Questions (FAQs)</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
