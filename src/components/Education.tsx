import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "M.S. Business Analytics",
    institution: "Florida International University",
    location: "Miami, FL",
    period: "2023 – 2024",
    highlights: [
      "Advanced Statistical Analysis",
      "Machine Learning Applications",
      "Business Intelligence & Data Visualization",
    ],
  },
  {
    degree: "B.Tech Information Technology",
    institution: "Vishnu Institute of Technology",
    location: "India",
    period: "2019 – 2023",
    highlights: [
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 parallax-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-lg shadow-lg border border-primary/30">
                  <GraduationCap className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-poppins font-bold text-gradient glow-text mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-inter font-semibold text-primary mb-4">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span className="font-inter text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-inter text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <div className="mb-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-foreground/85 font-inter">
                        <span className="text-primary mr-3 text-lg font-bold">◆</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
