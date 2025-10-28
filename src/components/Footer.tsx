import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            className="text-muted-foreground font-inter text-sm mb-4 md:mb-0"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © {currentYear} Manikanta Mutyala. All rights reserved.
          </motion.p>
          
          <motion.p className="text-muted-foreground font-inter text-sm">
            Built with React + Vite + Tailwind CSS
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button - Golden Circle */}
      <Link to="hero" smooth={true} duration={500}>
        <motion.button
          className="fixed bottom-8 right-8 p-5 bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary text-background rounded-full shadow-2xl hover-glow z-50 border-2 border-primary/50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.15, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={26} strokeWidth={3} />
        </motion.button>
      </Link>
    </footer>
  );
};

export default Footer;
