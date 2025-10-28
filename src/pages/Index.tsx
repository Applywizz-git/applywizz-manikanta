// import { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Preloader from "@/components/Preloader";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import Certifications from "@/components/Certifications";
// import Education from "@/components/Education";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// const Index = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <>
//       <AnimatePresence>
//         {loading && <Preloader onComplete={() => setLoading(false)} />}
//       </AnimatePresence>
      
//       {!loading && (
//         <div className="relative">
//           <Navbar />
//           <main>
//             <Hero />
//             <About />
//             <Experience />
//             <Projects />
//             <Skills />
//             <Certifications />
//             <Education />
//             <Contact />
//           </main>
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default Index;


import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async loading process and then set loading to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
