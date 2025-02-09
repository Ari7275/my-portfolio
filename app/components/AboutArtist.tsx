import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutArtist() {
    return (
        <motion.section
            id="about"
            className="artist-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center">About the Artist</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    {/* Add artist photo */}
                    <Image
                        src="/images/artist-photo.jpg"
                        alt="Yoel Vainer"
                        width={300}
                        height={400}
                        className="rounded-lg shadow-lg object-cover"
                        priority
                    />
                </div>
                
                <div className="md:w-2/3 artist-bio">
                    <p>
                        [Artist bio goes here - describe your father's journey, 
                        inspiration, and artistic philosophy]
                    </p>
                    
                    <p>
                        [Details about his technique, preferred subjects, 
                        and what makes his work unique]
                    </p>
                    
                    <p>
                        [Any exhibitions, awards, or notable achievements]
                    </p>
                </div>
            </div>
        </motion.section>
    );
} 