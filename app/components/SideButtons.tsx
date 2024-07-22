import { FiGithub } from "react-icons/fi";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";


export default function SideButtons() {
    return (
        <div className="side-buttons">
            <a target="_blank" href="https://github.com/Ari7275"><FiGithub/></a>
            <a target="_blank" href="https://www.linkedin.com/in/ari-vainer/"><BiLogoLinkedin/></a>
            <a target="_blank" href="https://www.instagram.com/ari.vainer/"><BiLogoInstagram/></a>
        </div>
    )
}