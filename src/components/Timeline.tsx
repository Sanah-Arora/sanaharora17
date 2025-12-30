import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

interface TimelineItem {
  type: "education" | "work" | "certification";
  title: string;
  organization: string;
  period: string;
  details?: string[];
  highlight?: string;
}

const timelineData: TimelineItem[] = [
  {
    type: "education",
    title: "M.Sc. Clinical Psychology",
    organization: "Manipal Academy of Higher Education",
    period: "2022–2024",
    highlight: "CGPA 8.7",
  },
  {
    type: "work",
    title: "Pro Bono Psychologist",
    organization: "Saday Sadev",
    period: "Aug 2025 – Nov 2025",
    details: [
      "Provided 1:1 short-term and long-term counselling using CBT-informed, trauma-informed, somatic, and attachment-based approaches",
      "Focus on in-depth case formulation and individualized treatment",
    ],
  },
  {
    type: "work",
    title: "Clinic Intern",
    organization: "The Mind Garden",
    period: "2022–2023",
    details: [
      "Designed and facilitated psychoeducational workshops on stress management and emotional regulation",
      "Developed marketing materials, handouts, and detailed content",
    ],
  },
  {
    type: "work",
    title: "Program Coordinator",
    organization: "The Mind & Wellness Studio",
    period: "Jan 2021 – Apr 2021",
    details: [
      "Led a team of 30 interns to enhance community engagement",
      "Partnered with Dr. Rachna Khanna Singh on mental health resource accessibility projects",
    ],
  },
  {
    type: "education",
    title: "BA(H) Psychology",
    organization: "Ambedkar University, Delhi",
    period: "2018–2021",
  },
  {
    type: "certification",
    title: "Substance Use & Addiction Management",
    organization: "Professional Certification",
    period: "2024",
  },
  {
    type: "certification",
    title: "Clinical Psychology Foundations",
    organization: "Cognizavest",
    period: "2024",
    details: [
      "Assessment, prevention, and psychosocial management",
      "Diagnostic frameworks, MSE, case formulation, ICD-10",
    ],
  },
  {
    type: "work",
    title: "Summer Intern",
    organization: "Moolchand Medcity & Fortis Hospital",
    period: "2019",
    details: [
      "Explored brain-mind-behavior interface and diagnostic methods",
      "Hands-on experience with psychometric tests and case histories",
    ],
  },
];

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  certification: Award,
};

const colorMap = {
  education: "bg-accent text-accent-foreground",
  work: "bg-primary text-primary-foreground",
  certification: "bg-secondary text-secondary-foreground",
};

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-8">
        {timelineData.map((item, index) => {
          const Icon = iconMap[item.type];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-4 md:gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-soft ${colorMap[item.type]}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                }`}
              >
                <div className="bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-soft transition-shadow">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {item.period}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.organization}</p>
                  
                  {item.highlight && (
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {item.highlight}
                    </span>
                  )}

                  {item.details && (
                    <ul className={`mt-3 space-y-1 text-sm text-muted-foreground ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}>
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
