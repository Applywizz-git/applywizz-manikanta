import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: " Azure Administrator Associate",
    issuer: "Microsoft",
   
  },
  {
    title: " Power BI Data Analyst (PL-300)",
    issuer: "Microsoft",
  
  },
  {
    title: "Data Engineering Foundations on Azure",
    issuer: "LinkedIn Learning",
   
  },
  {
    title: "Applied Machine Learning with Python",
    issuer: "Coursera",
   
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "Coursera",
    
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 10 }}
              className="glass-panel p-6 hover-glow relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-2xl" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-14 h-14 text-primary mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
              </motion.div>
              <h3 className="text-lg font-poppins font-bold text-gradient mb-2 relative z-10">
                {cert.title}
              </h3>
              <p className="text-muted-foreground font-inter text-sm mb-1 relative z-10">
                {cert.issuer}
              </p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
