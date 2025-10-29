import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center parallax-bg relative overflow-hidden">
      {/* Animated golden background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/12 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              className="text-primary text-lg font-inter uppercase tracking-wider font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-foreground">
              Manikanta <span className="text-gradient">Mutyala</span>
            </h1>
            <div className="text-xl md:text-2xl font-inter text-muted-foreground min-h-[80px]">
              <TypeAnimation
                sequence={[
                  "Transforming Data into Actionable Insights",
                  2000,
                  "Expert in SQL · Python · Power BI",
                  2000,
                  "Azure Data Factory · Tableau Specialist",
                  2000,
                  "Building Data-Driven Solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-foreground/70 font-inter text-lg max-w-xl">
              Business & Data Analyst with 4+ years of experience driving insights in Finance and Healthcare Analytics
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-background font-inter font-semibold px-8 py-6 text-lg hover-glow shadow-lg">
                  View Projects
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-inter font-semibold px-8 py-6 text-lg hover-glow"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
<div className="relative w-full max-w-md mx-auto h-56 md:h-72 overflow-hidden">
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-60"
    animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
  <img
    src={heroPortrait}
    alt="Manikanta Mutyala - Business & Data Analyst"
    className="relative rounded-2xl shadow-2xl border-2 border-primary/50 w-full h-full object-cover hover:border-primary transition-all duration-300"
/>
  </div> 
          </motion.div>
</div>


        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <ArrowDown className="text-primary cursor-pointer" size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
