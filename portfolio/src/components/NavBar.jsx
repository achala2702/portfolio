import img from "../assets/pro_pic.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 760) {
            setMenuOpen(false);
        }

        const handleResize = () => {
            if (window.innerWidth < 760) {
                setMenuOpen(false);
            } else {
                setMenuOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggle_menu =()=>{
        setMenuOpen(!menuOpen);
    }

  return (
    <>
    <div id="nav-bar" className={`${menuOpen? 'translate-x-0' : '-translate-x-full' } max-[760px]:w-3/4 flex fixed h-screen flex-col items-center w-1/5 bg-black p-8 lg:w-1/5 md:w-1/4 transition-transform duration-500 `}>
        <div className="w-48 h-48 bg-white rounded-full flex justify-center items-center md:w-36 md:h-36 lg:h-40 lg:w-40 max-[760px]:w-32 max-[760px]:h-32">
        <img className="w-44 h-44 rounded-full object-cover md:w-32  md:h-32 lg:w-36 lg:h-36 max-[760px]:w-28 max-[760px]:h-28" src={img} alt="profile pic" />
        </div>
        <div className= " flex gap-4 my-4 md:gap-2 lg:gap-4 xl:gap-6 xl:my-6">
            <a href="#" ><InstagramIcon sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '3rem', xl: '3.3rem' },  "&:hover": { color: '#623288' } }}/></a>
            <a href="#"><LinkedInIcon sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '3rem', xl: '3.3rem' }, "&:hover": { color: '#623288'}  }}/></a>
            <a href="#"><GitHubIcon sx={{ color: 'white', fontSize: { xs: '2.5rem', md: '2.8rem', xl: '3rem' }, "&:hover": { color: '#623288'} }}/></a>
        </div>
        <div className="pt-5 flex-grow">
            <ul className="flex flex-col gap-4">
            <li><NavLink to="/" className={`max-[760px]:text-2xl text-4xl md:text-3xl xl:text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text`}>Home</NavLink></li>
            <li><NavLink to="/about" className={`max-[760px]:text-2xl md:text-3xl xl:text-4xl text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text`}>About</NavLink></li>
            <li><NavLink to="/work" className={`max-[760px]:text-2xl md:text-3xl xl:text-4xl text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text`}>Work</NavLink></li>
            <li><NavLink to="/contact" className={`max-[760px]:text-2xl md:text-3xl xl:text-4xl text-4xl font-semibold text-white hover:text-transparent bg-gradient-to-b from-customBlue to-customPurple text-transparent bg-clip-text`}>Contact</NavLink></li>
            </ul>
        </div>
        <p className="text-white bottom-4">Copyright 2024</p>
    </div>
    <div className= {`hidden absolute bg-black rounded-full max-[760px]:flex items-center justify-center p-1 m-4 ${menuOpen? 'open': 'closed'}`} onClick={toggle_menu}>
        {menuOpen? <MenuOpenIcon sx={{color: 'white', "&:hover": { color: '#623288' }}} /> : <MenuIcon sx={{color: 'white', "&:hover": { color: '#623288' }}} />}
        
    </div>
    </>
  )
}

export default NavBar