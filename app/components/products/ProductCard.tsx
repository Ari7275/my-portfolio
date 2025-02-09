import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  image?: StaticImageData;
  title: string;
  description: string;
  dimensions?: string;
  technique?: string;
  price: number;
  available: boolean;
};

const ProductCard = ({ image, title, description, dimensions, technique, price, available }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="art-card"
    >
      <div className="art-card-image">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      
      <div className="art-card-content">
        <h3 className="art-card-title">{title}</h3>
        <p className="art-card-description">{description}</p>
        
        <div className="art-card-details">
          {dimensions && (
            <p>
              <span className="font-medium">Dimensions:</span> {dimensions}
            </p>
          )}
          {technique && (
            <p>
              <span className="font-medium">Technique:</span> {technique}
            </p>
          )}
        </div>
        
        <p className="art-card-price">
          ${price.toLocaleString()}
        </p>
        
        <button 
          className="purchase-button"
          disabled={!available}
        >
          {available ? "Inquire About This Piece" : "Not Available"}
        </button>
      </div>
    </motion.article>
  );
};

export default ProductCard; 