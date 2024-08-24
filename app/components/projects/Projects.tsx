import { ProjectType, SelectedPage } from "@/app/shared/types";
import Project from "./Project";
import project1 from "../../assets/project1.jpeg";
import { motion } from "framer-motion";

const projects: Array<ProjectType> = [
  {
    image: project1,
    title: "NOTES",
    description:
      "A Notes app to write, edit or delete your notes, you can filter notes by tags and edit them.",
    skills: "React - TypeScript - React-Bootstrap",
    url: "https://notes-dr6.pages.dev",
  }
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = () => {
  return (

    <section id="projects">
        {/* HEADER */}
        <motion.div
          className="projects-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        </motion.div>

        {/* PROJECTS */}
        <motion.div className="projects-body">
          {projects.map((project: ProjectType) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              skills={project.skills}
            />
          ))}
        </motion.div>
    </section>
  );
};

export default Projects;
