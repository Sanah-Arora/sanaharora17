import { Link } from "react-router-dom";
import { MapPin, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Crisis Resources Banner */}
      <div className="bg-accent/90 py-4">
        <div className="container text-center">
          <p className="font-body text-sm text-accent-foreground">
            <strong>In crisis?</strong> Contact AASRA: 91-9820466726 (24/7) | iCall: +91 9152987821 | Kiran: 1800-599-0019
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Sanah Arora</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Counselling Psychologist offering trauma-informed, evidence-based therapy for adults navigating emotional distress and relational challenges.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              Online
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                About Me
              </Link>
              <Link to="/approach" className="text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                My Approach
              </Link>
              <Link to="/faqs" className="text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                FAQs
              </Link>
              <Link to="/booking" className="text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                Book a Session
              </Link>
              <Link to="/work-with-me" className="text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                Work With Me
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4" />
                Delhi, India
              </div>
              <a href="https://instagram.com/attuned.adults" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                <Instagram className="w-4 h-4" />
                @attuned.adults
              </a>
              <a href="https://www.linkedin.com/in/sanah-arora-476107213/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="mailto:sanah.arora1710@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                <Mail className="w-4 h-4" />
                sanah.arora1710@gmail.com
              </a>
              <Link to="/about" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-light text-sm transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp (Scan QR)
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-xs">
            © {new Date().getFullYear()} Sanah Arora. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs">
            Confidential and ethical practice. Not a substitute for emergency care.
          </p>
        </div>
      </div>
    </footer>
  );
}
