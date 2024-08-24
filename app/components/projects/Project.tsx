import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  skills?: string;
  url: string;
};


const Project = ({ image, title, description, skills, url }: Props) => {
  return (
    <motion.div
      className="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="project-image">
        {/* <img /> */}
        <Image
         alt={`${image}`}
         src={image} 
        />

      </div>
      
      <div className="project-body">
        <h4>{title}</h4>
        <p>{description}</p>
        <p style={{ fontWeight: 700 }}>{skills}</p>
        <a href={url} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
