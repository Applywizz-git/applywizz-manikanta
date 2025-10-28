import { motion } from "framer-motion";
import { Code, Database, BarChart, Cloud, Brain, Shield, Building } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & Analytics",
    skills: ["Python", "R", "SQL", "DAX", "M Query", "Excel VBA", "StatsModels"],
  },
  {
    icon: BarChart,
    title: "Visualization & BI",
    skills: ["Power BI", "Tableau", "Looker Studio", "KPI Tracking"],
  },
  {
    icon: Database,
    title: "ETL & Data Engineering",
    skills: ["ADF", "SSIS", "Alteryx", "Airflow", "dbt", "Snowflake"],
  },
  {
    icon: Cloud,
    title: "Databases & Cloud",
    skills: ["SQL Server", "Synapse", "Databricks", "AWS Redshift", "BigQuery"],
  },
  {
    icon: Brain,
    title: "ML & Advanced Analytics",
    skills: ["Regression", "Forecasting", "Clustering", "NLP", "Azure ML"],
  },
  {
    icon: Shield,
    title: "Governance & Compliance",
    skills: ["HIPAA", "GDPR", "RBAC", "Purview MDM"],
  },
  {
    icon: Building,
    title: "Business Domains",
    skills: ["Healthcare", "Finance", "Marketing Analytics"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 parallax-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-6 hover-glow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/20 mr-4 shadow-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-poppins font-bold text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4" />
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-card/60 text-foreground rounded-md text-sm font-inter font-medium border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
