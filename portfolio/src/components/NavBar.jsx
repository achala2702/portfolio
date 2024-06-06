import img from "../assets/pro_pic.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 760) {
      setMenuOpen(true);

    }
    //set menu open when resizing
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(true);

      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggle_menu = () => {
    if(window.innerWidth < 760){
      setMenuOpen(!menuOpen);
    }
    
  };

  return (
    <>
      <div
        id="nav-bar"
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } max-[760px]:w-3/4 flex fixed h-screen flex-col items-center z-20 w-1/5 bg-black p-8 lg:w-1/5 md:w-1/4 transition-transform duration-500 `}
      >
        <div className="w-48 h-48 bg-purple-300 rounded-full flex justify-center items-center md:w-36 md:h-36 lg:h-40 lg:w-40 max-[760px]:w-32 max-[760px]:h-32">
          <img
            className="w-44 h-44 rounded-full object-cover md:w-32  md:h-32 lg:w-36 lg:h-36 max-[760px]:w-28 max-[760px]:h-28"
            src={img}
            alt="profile pic"
          />
        </div>
        <div className=" flex gap-4 my-4 md:gap-2 lg:gap-4 xl:gap-6 xl:my-6">
          <a href="#">
            <InstagramIcon
              sx={{
                color: "#E9D5FF",
                fontSize: { xs: "2.5rem", md: "3rem", xl: "3.3rem" },
                "&:hover": { color: "#623288" },
              }}
            />
          </a>
          <a href="#">
            <LinkedInIcon
              sx={{
                color: "#E9D5FF",
                fontSize: { xs: "2.5rem", md: "3rem", xl: "3.3rem" },
                "&:hover": { color: "#623288" },
              }}
            />
          </a>
          <a href="#">
            <GitHubIcon
              sx={{
                color: "#E9D5FF",
                fontSize: { xs: "2.5rem", md: "2.8rem", xl: "3rem" },
                "&:hover": { color: "#623288" },
              }}
            />
          </a>
        </div>
        <div className="pt-5 flex-grow">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/" onClick={toggle_menu}
                className={`max-[760px]:text-2xl text-4xl md:text-3xl xl:text-4xl font-semibold text-purple-200 hover:text-customCol_3 roboto-slab-new`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about" onClick={toggle_menu}
                className={`roboto-slab-new max-[760px]:text-2xl md:text-3xl xl:text-4xl text-4xl font-semibold text-purple-200 hover:text-customCol_3`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work" onClick={toggle_menu}
                className={`roboto-slab-new max-[760px]:text-2xl md:text-3xl xl:text-4xl text-4xl font-semibold text-purple-200 hover:text-customCol_3`}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact" onClick={toggle_menu}
                className={`roboto-slab-new max-[760px]:text-2xl md:text-3xl xl:text-4xl text-4xl font-semibold text-purple-200 hover:text-customCol_3`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <p className="roboto-slab-new text-purple-200 bottom-4">Copyright 2024</p>
      </div>
      <div
        className={`z-20 hidden fixed bg-black rounded-full max-[760px]:flex items-center justify-center p-1 m-4 ${
          menuOpen ? "open" : "closed"
        }`}
        onClick={toggle_menu}
      >
        {menuOpen ? (
          <MenuOpenIcon
            sx={{ color: "white", "&:hover": { color: "#623288" } }}
          />
        ) : (
          <MenuIcon sx={{ color: "white", "&:hover": { color: "#623288" } }} />
        )}
      </div>
    </>
  );
};

export default NavBar;
