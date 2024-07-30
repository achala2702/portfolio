import React from "react";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.png";
import project6 from "../../assets/images/project6.png";
import project7 from "../../assets/images/project7.png";
import project8 from "../../assets/images/project8.png";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from "@mui/icons-material/GitHub";

const Work = () => {
  const projects = [
    {
      title: "Website for a Accountant",
      url: project5,
      technology: "React / Express JS /MySQL / Tailwind CSS",
      description: "A resposive website created for an Accountant accoriding to his needs",
      link:"https://pttaccounting.com.au/"
    },
    {
      title: "Tech Store",
      url: project7,
      technology: "React / Express JS /Mongo DB / Stripe/ Tailwind CSS",
      description: "Responsive E-commerce website where users can buy electronic product. thsi website contains an admin panel by which admins can add, edit and delete product details",
      github_link:"https://github.com/achala2702/Tech_Store"
    },
    {
      title: "Portfolio",
      url: project4,
      technology: "React / Tailwind CSS",
      description: "A responsive portfolio created for my self",
      link:"https://achala-nipun.netlify.app/",
      github_link: "https://github.com/achala2702/portfolio"
    },
    {
      title: "PopCorn-Movie Website",
      url: project6,
      technology: "React / Spring Boot / MongoDB / Tailwind CSS",
      description: "Responsive website where users can browse for movies, watch trailers and add reviews for their favorite movies",
      github_link:"https://github.com/achala2702/movies_app"
    },
    
    {
      title: "Shoping Manager",
      url: project8,
      technology: "JAVA / jAVA Swing ",
      description: "A simple shoping manager application by which users can buy the items which are on stock and manager can add / remove products",
      github_link:"https://github.com/achala2702/shoping_manager"
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#48329C,_#1C1A1A)]  p-4  text-purple-300">
      <div className="bg-black rounded-lg my-4 p-2"><h1 className="text-customCol_3 text-4xl text-center mb-4 font-semibold max-[760px]:text-3xl">&lt;Projects/&gt;</h1></div>
      <div className="grid gap-4 grid-cols-2 max-[767px]:grid-cols-1">
      {projects.map((project, index) => (
        <div className="p-4 bg-black  rounded-lg group relative" key={index}>
          <div className="">
          <img
            className="rounded-lg "
            src={project.url}
            alt={project.title}
          />
            <p className="max-[767px]:text-md text-center md:lg lg:text-xl">{project.title}</p>
          </div>
          
          <div className="h-full opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible flex flex-col items-center justify-center gap-4 inset-0 absolute p-4 bg-black rounded-lg transition-opacity duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-customCol_3">{project.technology}</h2>
            <p className="text-lg lg:text-xl">{project.description}</p>
            {project.link &&(
                <a className="hover:text-customCol_3 transition transform active:scale-90" href={project.link}><LaunchIcon sx={{ fontSize: { xs: "2rem", md: "2rem", xl: "2.5rem" }}}/></a>
              )}
              {project.github_link &&(
                <a className="hover:text-customCol_3 transition transform active:scale-90" href={project.github_link}><GitHubIcon sx={{ fontSize: { xs: "2rem", md: "2rem", xl: "2.5rem" }}}/></a>
              )}
              
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Work;
