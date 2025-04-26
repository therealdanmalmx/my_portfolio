

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-[100px] w-full px-12">
            <div><a href="#home">Logo</a></div>
            <div>
                <ul className="flex items-center my-2">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="flex items-center space-x-12">
                <div>LinkedIn</div>
                <div>GitHub</div>

            </div>

            
        </div>
    );
};

export default Navbar;