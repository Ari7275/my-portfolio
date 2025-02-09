import { FiGithub } from "react-icons/fi";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";


export default function SideButtons() {
    return (
        <div className="side-buttons">
            <a className="text-accent hover:text-accent-light dark:text-gray-200 dark:hover:text-accent" target="_blank" href="https://github.com/Ari7275"><FiGithub size={35}/></a>
            <a className="text-accent hover:text-accent-light dark:text-gray-200 dark:hover:text-accent" target="_blank" href="https://www.linkedin.com/in/ari-vainer/"><BiLogoLinkedin size={35}/></a>
            <a className="text-accent hover:text-accent-light dark:text-gray-200 dark:hover:text-accent" target="_blank" href="https://www.instagram.com/ari.vainer/"><BiLogoInstagram size={35}/></a>
        </div>
    )
}