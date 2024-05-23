import img from "../assets/pro_pic.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const active_link = "text-customBluishPurple";
    const location = useLocation();
  return (
    <div id="nav-bar" className="fixed h-screen flex flex-col items-center w-1/5 bg-black p-8 lg:w-1/4 md:w-1/4">
        <div className="w-48 h-48  bg-white rounded-full flex justify-center items-center md:w-36 md:h-36 lg:h-40 lg:w-40">
        <img className="w-44 h-44 rounded-full object-cover md:w-32  md:h-32 lg:w-36 lg:h-36" src={img} alt="profile pic" />
        </div>
        <div className= " flex gap-4 my-4 md:gap-2 lg:gap-4 xl:gap-6 xl:my-6">
            <a href="#" ><InstagramIcon sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '3rem', xl: '3.3rem' },  "&:hover": { color: '#623288' } }}/></a>
            <a href="#"><LinkedInIcon sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '3rem', xl: '3.3rem' }, "&:hover": { color: '#623288'}  }}/></a>
            <a href="#"><GitHubIcon sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '2.8rem', xl: '3rem' }, "&:hover": { color: '#623288'} }}/></a>
        </div>
        <div className="pt-5 flex-grow">
            <ul className="flex flex-col gap-4">
            <li><Link to="/" className={` text-4xl md:text-3xl xl:text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text ${location.pathname === "/" ? active_link : ""}`}>Home</Link></li>
                <li><Link to="/about" className={`md:text-3xl xl:text-4xl text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text ${location.pathname === "/about" ? active_link : ""}`}>About</Link></li>
                <li><Link to="/work" className={`md:text-3xl xl:text-4xl text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text ${location.pathname === "/work" ? active_link : ""}`}>Work</Link></li>
                <li><Link to="/contact" className={`md:text-3xl xl:text-4xl text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text ${location.pathname === "/contact" ? active_link: ""}`}>Contact</Link></li>
            </ul>
        </div>
        <p className="text-white bottom-4">Copyright 2024</p>
    </div>
  )
}

export default NavBar