import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index: number;
}

const ServiceCard = ({ title, description, image, slug, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative"
    >
      <div 
        className="relative bg-card rounded-2xl overflow-hidden transition-all duration-500"
        style={{ boxShadow: "0 10px 40px -15px hsl(var(--navy) / 0.2)" }}
      >
        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
          <div 
            className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
          />
        </div>

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy/30 to-transparent" />
          
          {/* Number Badge */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-bold text-navy-dark shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6 bg-gradient-to-b from-card to-card/95">
          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>
          
          <Link
            to={`/services#${slug}`}
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm group/link"
          >
            <span className="relative">
              Learn More
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gold group-hover/link:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
