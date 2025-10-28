import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Award, TrendingUp } from "lucide-react";

const Counter = ({ end, label, icon: Icon }: { end: number; label: string; icon: any }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-6 text-center hover-glow"
    >
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <p className="text-4xl font-poppins font-bold text-gradient mb-2">
        {count}+
      </p>
      <p className="text-muted-foreground font-inter">{label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-lg md:text-xl font-inter text-foreground/90 leading-relaxed">
              Business Analyst with <span className="text-gradient font-bold glow-text">4+ years of experience</span> in Finance and Healthcare Analytics. 
              Expert in <span className="text-primary font-bold">SQL, Python, R, Power BI, Tableau, and Azure Data Factory</span>—designing 
              dashboards, ETL pipelines, and KPI scorecards that improve decision-making and operational efficiency.
            </p>
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="text-lg md:text-xl font-inter text-foreground/90 leading-relaxed">
              Proven track record of delivering data-driven insights that optimize business processes, reduce costs, 
              and enhance strategic planning across multiple industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Counter end={10} label="Projects Completed" icon={Briefcase} />
            <Counter end={4} label="Years Experience" icon={TrendingUp} />
            <Counter end={100} label="Client Satisfaction" icon={Award} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
