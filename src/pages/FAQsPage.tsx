import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "Who is therapy for?",
        answer:
          "Therapy is for anyone feeling emotionally overwhelmed, stuck, confused, or distressed—whether or not there is a clear 'reason.' You don't need to be in crisis to seek support. Many people come to therapy to better understand themselves, improve relationships, or cope more effectively with stress and past experiences.",
      },
      {
        question: "What issues can I seek therapy for?",
        answer:
          "I work with adults experiencing anxiety, low mood, trauma-related concerns, grief, obsessive thoughts or compulsive behaviours, self-esteem issues, body image concerns, and relationship difficulties. If you're unsure whether therapy is right for your concern, you're welcome to reach out and ask.",
      },
      {
        question: "How do I know if therapy will help me?",
        answer:
          "Therapy is not about quick fixes. It works best when there is openness, consistency, and willingness to reflect. While outcomes vary for each person, many clients experience increased emotional clarity, improved coping, and a better understanding of their patterns over time.",
      },
      {
        question: "What is your approach to therapy?",
        answer:
          "My approach is integrative and trauma-informed. This means therapy is structured, evidence-based, and paced according to your comfort and readiness. We work collaboratively to understand your experiences and develop healthier ways of responding to emotional challenges.",
      },
    ],
  },
  {
    title: "Practical & Process Questions",
    faqs: [
      {
        question: "What happens in the first session?",
        answer:
          "The first session focuses on understanding your concerns, background, and expectations from therapy. You can share as much or as little as you feel comfortable with. We also discuss confidentiality, boundaries, and whether working together feels like a good fit.",
      },
      {
        question: "How long does each session last?",
        answer: "Each session lasts approximately 50 minutes.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "There is no fixed number. Some people benefit from short-term therapy, while others choose longer-term work. The pace and duration are discussed collaboratively and reviewed over time.",
      },
      {
        question: "Is everything I share confidential?",
        answer:
          "Yes. Confidentiality is a core part of ethical psychological practice. Information shared in therapy is kept private, except in rare situations where there is a risk of serious harm to you or others, as per ethical and legal guidelines.",
      },
      {
        question: "Do you offer online sessions?",
        answer:
          "Yes. I offer both online and offline (Mumbai) sessions, subject to availability.",
      },
      {
        question: "What are your session fees?",
        answer:
          "Session fees vary depending on the mode of therapy and availability. Details are shared during the booking or inquiry process. Limited low-cost or pro bono slots may be available based on capacity.",
      },
      {
        question: "Do you work with children, couples, or families?",
        answer: "Currently, I work with individual adults (18+) only.",
      },
      {
        question: "Are you a clinical psychologist or psychiatrist?",
        answer:
          "I am a Counselling Psychologist. I do not prescribe medication. If psychiatric evaluation or specialised care is needed, I assist with appropriate referrals.",
      },
      {
        question: "What if I feel therapy is not helping?",
        answer:
          "It's okay to share this. Therapy includes regular check-ins about what is and isn't working. If needed, we can modify the approach or discuss referrals to other professionals.",
      },
    ],
  },
  {
    title: "Safety & Boundaries",
    faqs: [
      {
        question: "Is therapy suitable for emergencies?",
        answer:
          "No. Therapy sessions are not meant for crisis situations. If you are experiencing thoughts of harming yourself or others, please contact local emergency services or a crisis helpline immediately.",
      },
      {
        question: "Can I contact you outside sessions?",
        answer:
          "Communication outside sessions is limited to scheduling and administrative matters. Therapeutic work happens within session time to maintain clear boundaries.",
      },
    ],
  },
];

export default function FAQsPage() {
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
              FAQs
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Answers to common questions about therapy, the process, and what to expect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${catIndex}-${faqIndex}`}
                    className="bg-background rounded-xl px-6 border border-border shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {/* Soft Consultation CTA */}

          {/* Soft Consultation CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-border text-center"
          >
            <p className="text-muted-foreground mb-2">
              Still have questions or unsure where to begin?
            </p>
            <p className="text-muted-foreground mb-6 text-sm">
              You're welcome to book a brief 15-minute consultation to ask what's on your mind and see if this feels like a good fit.
            </p>
            <Button asChild variant="soft" size="lg">
              <Link to="/booking">Book a Free 15-Minute Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
