import Linkedin from "../../../public/icons/linkedin.tsx";
import Github from "../../../public/icons/github.tsx";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-[100px] w-full px-12">
            <div><a href="#home">Logo</a></div>
            <div className="hidden md:block">
                <ul className="flex items-center my-2">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="hidden md:flex items-start md:items-center space-x-2">
                <div><Linkedin /></div>
                <div><Github /></div>
            </div>
        </div>
    );
};

export default Navbar;