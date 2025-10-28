import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "UnitedHealth Group",
    role: "Business Analyst",
    period: "Dec 2024 – Present",
    location: "Remote",
    achievements: [
      "Streamlined enterprise data flows with SSIS + Alteryx → +30% readiness",
      "Built Power BI dashboards (DAX, RLS) → −35% manual updates",
      "Predictive model (87% accuracy) → −11% readmissions",
      "Automated reports via Python + REST API → −40% cycle time",
    ],
  },
  {
    company: "CitiusTech",
    role: "Data Analyst",
    period: "Jan 2022 – Jul 2023",
    location: "India",
    achievements: [
      "Patient readmission model (85% accuracy)",
      "Tableau dashboards (−40% ad-hoc requests)",
      "AWS Lambda automation (24/7 reporting)",
    ],
  },
  {
    company: "DMI Finance",
    role: "Data Analyst",
    period: "Nov 2020 – Jan 2022",
    location: "India",
    achievements: [
      "Credit-risk models (+18% accuracy)",
      "Power BI portfolio dashboards (−40% manual work)",
      "Azure Data Factory ETL (−30% latency)",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 parallax-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 rounded-full bg-primary border-4 border-background animate-glow-pulse" />
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="glass-panel p-6 hover-glow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-gradient glow-text mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building2 size={18} className="mr-2" />
                        <span className="font-inter font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-inter">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-foreground/85 font-inter text-sm">
                        <span className="text-primary mr-3 text-lg font-bold">◆</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
