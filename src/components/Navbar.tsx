// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "@/components/ThemeToggle";


// const navItems = [
//   { name: "Home", to: "hero" },
//   { name: "About", to: "about" },
//   { name: "Experience", to: "experience" },
//   { name: "Projects", to: "projects" },
//   { name: "Skills", to: "skills" },
//   { name: "Certifications", to: "certifications" },
//   { name: "Education", to: "education" },
//   { name: "Contact", to: "contact" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled ? "glass-panel py-4 shadow-[0_4px_20px_rgba(212,175,55,0.15)]" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           <motion.h1
//             className="text-2xl font-poppins font-bold text-gradient"
//             whileHover={{ scale: 1.05 }}
//           >
//             MM
//           </motion.h1>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <Link
//                   to={item.to}
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   offset={-80}
//                   className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300 font-inter text-sm uppercase tracking-wider"
//                   activeClass="text-primary font-semibold"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//             {/* Desktop Menu */}
// <ul className="hidden md:flex items-center space-x-8">
//   {navItems.map((item) => (
//     <li key={item.to}>
//       <Link
//         to={item.to}
//         spy={true}
//         smooth={true}
//         duration={500}
//         offset={-80}
//         className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300 font-inter text-sm uppercase tracking-wider"
//         activeClass="text-primary font-semibold"
//       >
//         {item.name}
//       </Link>
//     </li>
//   ))}
// </ul>

// {/* Theme toggle (visible on desktop) */}
// <div className="hidden md:block ml-4">
//   <ThemeToggle />
// </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-foreground"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle mobile menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
// <AnimatePresence>
//   {isMobileMenuOpen && (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: "auto" }}
//       exit={{ opacity: 0, height: 0 }}
//       className="md:hidden mt-4"
//     >
//       <ul className="flex flex-col space-y-4">
//         {navItems.map((item) => (
//           <li key={item.to}>
//             <Link
//               to={item.to}
//               spy={true}
//               smooth={true}
//               duration={500}
//               offset={-80}
//               className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300 font-inter text-sm uppercase tracking-wider block"
//               activeClass="text-primary font-semibold"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Theme toggle for mobile */}
//       <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
//         <span className="text-sm opacity-70">Theme</span>
//         <ThemeToggle />
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Certifications", to: "certifications" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-panel py-4 shadow-[0_4px_20px_rgba(212,175,55,0.15)] backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo with better spacing */}
            <motion.div
              className="text-2xl font-poppins font-bold text-gradient bg-background/80 rounded-lg px-3 py-2"
              whileHover={{ scale: 1.05 }}
            >
              MM
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300 font-inter text-sm uppercase tracking-wider whitespace-nowrap"
                  activeClass="text-primary font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex items-center ml-4">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground bg-background/80 rounded-lg p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40 md:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Mobile Menu Content */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 p-6"
                >
                  <ul className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-80}
                          className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300 font-inter text-sm uppercase tracking-wider block py-2 px-4 rounded-md hover:bg-accent"
                          activeClass="text-primary font-semibold bg-accent"
                          onClick={handleNavClick}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Theme toggle for mobile */}
                  <div className="flex items-center justify-between pt-6 mt-4 border-t border-foreground/10">
                    <span className="text-sm text-foreground/70">Theme</span>
                    <ThemeToggle />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Add padding to the top of your main content to account for fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </div>
  );
};

export default Navbar;