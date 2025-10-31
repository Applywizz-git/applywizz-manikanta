// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";
// import { Button } from "./ui/button";

// const contactInfo = [
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Miami, FL",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+1 (786) 818-0576",
//     link: "tel:+17868180576",
//   },
//   {
//     icon: Mail,
//     label: "Email",
//     value: "manikantamutyala80@gmail.com",
//     link: "mailto:manikantamutyala80@gmail.com",
//   },
// ];

// const socialLinks = [
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     url: "https://www.linkedin.com/in/mutyala-manikanta-7ab129247",
//   },
//   {
//     icon: Mail,
//     label: "Email",
//     link: "mailto:manikantamutyala80@gmail.com", // Use the 'link' for mailto
//   },
// ];

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-background relative overflow-hidden">
//       {/* Golden Background Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-0 left-0 w-96 h-96 bg-primary/12 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 10, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
//           animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//           transition={{ duration: 15, repeat: Infinity }}
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
//           <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities, collaborations, or interesting projects. 
//             Feel free to reach out!
//           </p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-6 mb-12">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05, rotate: 5 }}
//                 className="glass-panel p-6 text-center hover-glow border-2 border-primary/20 hover:border-primary/50 transition-all"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full mb-4 shadow-lg">
//                   <info.icon className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
//                 </div>
//                 <h3 className="text-sm font-inter uppercase tracking-wider text-muted-foreground mb-2">
//                   {info.label}
//                 </h3>
//                 {info.link ? (
//                   <a
//                     href={info.link}
//                     className="text-foreground font-inter hover:text-primary transition-colors"
//                   >
//                     {info.value}
//                   </a>
//                 ) : (
//                   <p className="text-foreground font-inter">{info.value}</p>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="glass-panel p-8 text-center border-2 border-primary/30 relative overflow-hidden"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
//             <h3 className="text-2xl font-poppins font-bold text-gradient glow-text mb-6">
//               Connect With Me
//             </h3>
//             <div className="flex justify-center gap-4 flex-wrap">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-background font-inter font-bold rounded-lg transition-all hover-glow shadow-lg border border-primary/50"
//                 >
//                   <social.icon size={22} />
//                   <span>{social.label}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Miami, FL",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (786) 818-0576",
    link: "tel:+17868180576",
  },
  {
    icon: Mail,
    label: "Email",
    value: "manikantamutyala00@gmail.com",
    link: "mailto:manikantamutyala00@gmail.com", // Ensure this is the correct mailto link
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mutyala-manikanta-7ab129247",
  },
  {
    icon: Mail,
    label: "Email",
    link: "mailto:manikantamutyala00@gmail.com", // Ensure this is the correct mailto link
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Golden Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/12 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="glass-panel p-6 text-center hover-glow border-2 border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full mb-4 shadow-lg">
                  <info.icon className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                </div>
                <h3 className="text-sm font-inter uppercase tracking-wider text-muted-foreground mb-2">
                  {info.label}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-foreground font-inter hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-inter">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 text-center border-2 border-primary/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h3 className="text-2xl font-poppins font-bold text-gradient glow-text mb-6">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-background font-inter font-bold rounded-lg transition-all hover-glow shadow-lg border border-primary/50"
                >
                  <social.icon size={22} />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
