// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "./ui/button";
// import projectWarehouse from "@/assets/project-warehouse.jpg";
// import projectStudent from "@/assets/project-student.jpg";
// import projectLoan from "@/assets/project-loan.jpg";

// const projects = [
//   {
//     title: "Enterprise Data Warehouse & BI Platform",
//     description: "Built a star-schema data warehouse in Azure Synapse with automated ETL and Power BI dashboards, cutting query latency by 55% and improving analytics efficiency.",
//     image: projectWarehouse,
//     tags: ["Azure Synapse", "dbt", "Power BI", "SQL"],
//     impact: "Reduced query latency by 55%",
//   },
//   {
//     title: "Student Performance Predictive Dashboard",
//     description: "Developed an ETL pipeline and predictive models for student data, enabling accurate risk scoring and targeted interventions with 85% accuracy.",
//     image: projectStudent,
//     tags: ["Python", "Tableau", "Machine Learning", "Predictive Analytics"],
//     impact: "85% accuracy forecast",
//   },
//   {
//     title: "Loan Portfolio Analytics & Pricing Optimization",
//     description: "Created SQL pipelines and Power BI scorecards for loan pricing optimization, reducing forecast variance by 15% and enhancing capital allocation decisions",
//     image: projectLoan,
//     tags: ["SQL", "Power BI", "R", "Finance Analytics"],
//     impact: "−15% variance in pricing",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
//             Featured Projects
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
//         </motion.div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView="auto"
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={{ clickable: true }}
//           navigation
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           className="max-w-7xl mx-auto py-12"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index} className="!w-full md:!w-[600px]">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="glass-panel overflow-hidden h-full"
//               >
//                 <div className="relative h-80 overflow-hidden group">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
//                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </div>
//                 <div className="p-6 space-y-4 relative">
//                   <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
//                   <h3 className="text-2xl font-poppins font-bold text-gradient">
//                     {project.title}
//                   </h3>
//                   <p className="text-foreground/80 font-inter">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-full text-xs font-inter font-semibold hover:bg-primary/25 transition-colors"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="pt-4 border-t border-primary/30">
//                     <p className="text-primary font-inter font-bold mb-4 flex items-center">
//                       <span className="mr-2">✦</span>
//                       Impact: {project.impact}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import projectWarehouse from "@/assets/project-warehouse.jpg";
import projectStudent from "@/assets/project-student.jpg";
import projectLoan from "@/assets/project-loan.jpg";

const projects = [
  {
    title: "Enterprise Data Warehouse & BI Platform",
    description: "Built a star-schema data warehouse in Azure Synapse with automated ETL and Power BI dashboards, cutting query latency by 55% and improving analytics efficiency.",
    image: projectWarehouse,
    tags: ["Azure Synapse", "dbt", "Power BI", "SQL"],
    impact: "Reduced query latency by 55%",
  },
  {
    title: "Student Performance Predictive Dashboard",
    description: "Developed an ETL pipeline and predictive models for student data, enabling accurate risk scoring and targeted interventions with 85% accuracy.",
    image: projectStudent,
    tags: ["Python", "Tableau", "Machine Learning", "Predictive Analytics"],
    impact: "85% accuracy forecast",
  },
  {
    title: "Loan Portfolio Analytics & Pricing Optimization",
    description: "Created SQL pipelines and Power BI scorecards for loan pricing optimization, reducing forecast variance by 15% and enhancing capital allocation decisions",
    image: projectLoan,
    tags: ["SQL", "Power BI", "R", "Finance Analytics"],
    impact: "−15% variance in pricing",
  },
];

const Projects = () => {
  let swiperRef: any = null; // Reference to Swiper instance

  const stopAutoplay = () => {
    if (swiperRef) swiperRef.swiper.autoplay.stop(); // Stop autoplay on hover
  };

  const startAutoplay = () => {
    if (swiperRef) swiperRef.swiper.autoplay.start(); // Start autoplay when not hovering
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef = swiper)} // Store swiper instance reference
          className="max-w-7xl mx-auto py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-full md:!w-[600px]"
              onMouseEnter={stopAutoplay} // Stop autoplay when mouse enters
              onMouseLeave={startAutoplay} // Resume autoplay when mouse leaves
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-panel overflow-hidden h-full"
              >
                <div className="relative h-80 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 space-y-4 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <h3 className="text-2xl font-poppins font-bold text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 font-inter">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-full text-xs font-inter font-semibold hover:bg-primary/25 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-primary/30">
                    <p className="text-primary font-inter font-bold mb-4 flex items-center">
                      <span className="mr-2">✦</span>
                      Impact: {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
