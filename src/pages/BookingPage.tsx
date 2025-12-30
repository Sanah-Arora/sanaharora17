import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, Clock, MessageCircle, Calendar, CreditCard } from "lucide-react";

export default function BookingPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [safetyCheck, setSafetyCheck] = useState<string | null>(null);
  const [bookingType, setBookingType] = useState<string>("session");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "Thank you for reaching out. I'll respond within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 min-h-screen gradient-hero">
        <div className="container py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center bg-card rounded-2xl p-10 shadow-soft"
          >
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Thank You for Reaching Out
            </h1>
            <p className="text-muted-foreground mb-4">
              I've received your inquiry and will respond within 24–48 hours with next steps.
            </p>
            <p className="text-muted-foreground text-sm mb-8">
              If your concern feels urgent, please reach out to a local emergency service or helpline.
            </p>
            <p className="text-foreground font-medium">
              Warm regards,<br />
              Sanah Arora<br />
              <span className="text-muted-foreground font-normal">Counselling Psychologist</span>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

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
              Starting therapy can feel daunting. This page is meant to make the process simple and transparent. If you have questions before booking, you're welcome to reach out.
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
                desc: "Choose between a 15-minute free consultation or a therapy session",
              },
              {
                icon: Clock,
                step: "2",
                title: "Receive a response within 24–48 hours",
                desc: "Confirmation or follow-up, if needed",
              },
              {
                icon: Calendar,
                step: "3",
                title: "Session details shared",
                desc: "Including format, timing, and payment information for therapy sessions",
              },
              {
                icon: CreditCard,
                step: "4",
                title: "Session confirmed",
                desc: "Therapy sessions confirmed once payment is completed; free consultations confirmed via email",
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
                <h3 className="font-medium text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card space-y-8"
          >
            {/* Booking Type Selection */}
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                What would you like to book?
              </h3>

              {/* Free Consultation Option - Displayed First */}
              <div className="space-y-4">
                <label
                  className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    bookingType === "consultation"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <RadioGroup
                      value={bookingType}
                      onValueChange={setBookingType}
                      className="mt-1"
                    >
                      <RadioGroupItem value="consultation" id="consultation" />
                    </RadioGroup>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">15-Minute Free Consultation</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          Optional First Step
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A brief introductory call to ask questions, understand how therapy works, and see if working together feels like a good fit. This is not a therapy session and comes with no obligation to continue.
                      </p>
                    </div>
                  </div>
                </label>

                <label
                  className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    bookingType === "session"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <RadioGroup
                      value={bookingType}
                      onValueChange={setBookingType}
                      className="mt-1"
                    >
                      <RadioGroupItem value="session" id="session" />
                    </RadioGroup>
                    <div className="flex-1">
                      <span className="font-medium text-foreground">Therapy Session</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Book a full therapy session (50-60 minutes)
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Basic Info */}
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                Basic Information
              </h3>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required placeholder="Your full name" className="mt-1.5" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input id="age" type="number" required min="18" placeholder="18+" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="location">City & Country *</Label>
                    <Input id="location" required placeholder="Delhi, India" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required placeholder="your@email.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" className="mt-1.5" />
                </div>
              </div>
            </div>

            {/* Session Preferences - Only show for therapy sessions */}
            {bookingType === "session" && (
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Session Preferences
                </h3>
                <div className="grid gap-4">
                  <div>
                    <Label>Preferred Time Slot *</Label>
                    <RadioGroup className="mt-2 flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="afternoon" id="afternoon" />
                        <Label htmlFor="afternoon" className="font-normal">Afternoon (12–4 PM)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="evening" id="evening" />
                        <Label htmlFor="evening" className="font-normal">Evening (6–9 PM)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Session Type</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Session (₹550 / 50-60 min)</SelectItem>
                        <SelectItem value="sliding">Sliding Scale (₹250 onwards)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Reason - only show for therapy sessions */}
            {bookingType === "session" && (
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Reason for Seeking Therapy
                </h3>
                <Label htmlFor="reason">Briefly describe what brings you to therapy at this time</Label>
                <Textarea
                  id="reason"
                  placeholder="Share as much or as little as you feel comfortable with..."
                  className="mt-1.5 min-h-[120px]"
                />
              </div>
            )}

            {/* Questions for consultation */}
            {bookingType === "consultation" && (
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Questions or Topics
                </h3>
                <Label htmlFor="questions">Anything specific you'd like to discuss during the consultation? (Optional)</Label>
                <Textarea
                  id="questions"
                  placeholder="Any questions about therapy, the process, or how I work..."
                  className="mt-1.5 min-h-[100px]"
                />
              </div>
            )}

            {/* Therapy History - only for sessions */}
            {bookingType === "session" && (
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  Therapy History
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label>Have you been in therapy before?</Label>
                    <RadioGroup className="mt-2 flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="therapy-yes" />
                        <Label htmlFor="therapy-yes" className="font-normal">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="therapy-no" />
                        <Label htmlFor="therapy-no" className="font-normal">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Are you currently taking psychiatric medication?</Label>
                    <RadioGroup className="mt-2 flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="med-yes" />
                        <Label htmlFor="med-yes" className="font-normal">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="med-no" />
                        <Label htmlFor="med-no" className="font-normal">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {/* Safety Check - only for sessions */}
            {bookingType === "session" && (
              <div className="bg-accent-soft border border-accent/20 rounded-xl p-5">
                <h3 className="font-display text-lg font-medium text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-accent" />
                  Safety Check
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This is an ethical requirement to ensure appropriate care.
                </p>
                <Label>Are you currently experiencing thoughts of harming yourself or others? *</Label>
                <RadioGroup
                  className="mt-2 flex gap-4"
                  value={safetyCheck || undefined}
                  onValueChange={setSafetyCheck}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="safety-yes" />
                    <Label htmlFor="safety-yes" className="font-normal">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="safety-no" />
                    <Label htmlFor="safety-no" className="font-normal">No</Label>
                  </div>
                </RadioGroup>
                {safetyCheck === "yes" && (
                  <div className="mt-4 bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <p className="text-sm text-destructive font-medium mb-2">
                      If you are in immediate danger, please contact:
                    </p>
                    <ul className="text-sm text-destructive space-y-1">
                      <li>• AASRA: 91-9820466726 (24/7)</li>
                      <li>• Kiran: 1800-599-0019 (24/7)</li>
                      <li>• Local emergency services</li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Consent */}
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                Consent & Acknowledgement
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Checkbox id="consent1" required />
                  <Label htmlFor="consent1" className="font-normal text-sm leading-relaxed">
                    I understand that this service is counselling-based and not a crisis or emergency service
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="consent2" required />
                  <Label htmlFor="consent2" className="font-normal text-sm leading-relaxed">
                    I understand confidentiality and its limits
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="consent3" required />
                  <Label htmlFor="consent3" className="font-normal text-sm leading-relaxed">
                    I consent to being contacted regarding my inquiry
                  </Label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : bookingType === "consultation"
                ? "Request Free Consultation"
                : "Request a Session"}
            </Button>

            <p className="text-center text-muted-foreground text-xs">
              {bookingType === "consultation"
                ? "Free consultations are 15 minutes • No obligation to continue"
                : "Sessions are by appointment only • Adults 18+ only • Cancellations require 24 hours' notice"}
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
