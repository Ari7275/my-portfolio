import { FiFacebook, FiGithub } from "react-icons/fi";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";


export default function SideButtons() {
    return (
        <div className="side-buttons">
            <a className="text-accent hover:text-accent-light dark:text-gray-200 dark:hover:text-accent" target="_blank" href="https://www.facebook.com/share/1HVfbfkr25/?mibextid=wwXIfr"><FiFacebook size={35}/></a>
            <a className="text-accent hover:text-accent-light dark:text-gray-200 dark:hover:text-accent" target="_blank" href="https://www.instagram.com/yoel_vainer?igsh=aW51Nndmejg5M200"><BiLogoInstagram size={35}/></a>
        </div>
    )
}