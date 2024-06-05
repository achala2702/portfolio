import WavingHandIcon from "@mui/icons-material/WavingHand";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HTML from "../../assets/images/HTML.png";
import CSS from "../../assets/images/CSS.png";
import Java from "../../assets/images/Java.png";
import JS from "../../assets/images/JS.png";
import MongoDB from "../../assets/images/MongoDB.png";
import MySQL from "../../assets/images/MySQL.png";
import NodeJS from "../../assets/images/NodeJS.png";
import Python from "../../assets/images/Python.png";
import react from "../../assets/images/React.png";
const Home = () => {

  //for typewritter animation
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Frontend Developer.", "Backend Developer."],
    loop: 0,
  });
  //navigation to the pages by using content in home page
  const [isClicked, setIsClicked] = useState("");
  const navigate = useNavigate();
  
  const handleClick = (item) => (e) => {
    e.preventDefault();
    setIsClicked(item);
    setTimeout(() => {
      const regex = /[-0-9]/g;
      navigate(`/${item.replace(regex, "")}`);
    }, 300);
  };

  //skills animation
  const images = [{img_name: "HTML",
url:HTML},
{img_name: "CSS",
url:CSS},
{img_name: "JS",
url:JS},
{img_name: "React",
url:react},
{img_name: "Node JS",
url:NodeJS},
{img_name: "JAVA",
url:Java},
{img_name: "Python",
url:Python},
{img_name: "MySQL",
url:MySQL},
{img_name: "MongoDB",
url:MongoDB}]

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle,_#48329C,_#1C1A1A)] text-purple-200 max-[760px]:pt-5 roboto-slab-new">
      <div className="h-auto grid max-[760px]:grid-cols-2 md:grid-cols-3 mt-4 mx-4 gap-4">
        <Link
          onClick={handleClick("about")}
          className={`md:col-span-2 max-[760px]:col-span-2 p-4 hover:text-customCol_3 flex flex-col text-center rounded-lg bg-black text-2xl ${
            isClicked === "about" ? "animate-clickOpacity" : ""
          }`}
        >
          <span className="text-8xl font-medium mb-2">
            Hi{" "}
            <WavingHandIcon
              sx={{
                color: "#EBA352",
                fontSize: { xs: "2.5rem", md: "4rem", xl: "5rem" },
              }}
            />
          </span>
          <span>
            <span className="text-2xl font-medium">I am </span>
            <span className=" font-bold">Achala Nipun</span>
          </span>
          <span>an</span>
          <span>Undergraduate </span>
          <span className="font-bold mt-2">
            {text}
            <Cursor />
          </span>
        </Link>
        <Link
          onClick={handleClick("work")}
          className={`hover:text-customCol_3 p-4 cursor-pointer flex flex-col justify-center items-center rounded-lg bg-black md:text-6xl lg:text-8xl font-bold max-[760px]:text-5xl ${
            isClicked === "work" ? "animate-clickOpacity" : ""
          }`}
        >
          <span>100+</span>
          <span className="text-4xl max-[760px]:text-xl">Projects</span>
        </Link>

        <Link
          onClick={handleClick("work-1")}
          className={`hover:text-customCol_3 p-4 cursor-pointer flex flex-col justify-center items-center rounded-lg bg-black md:text-6xl lg:text-8xlfont-bold max-[760px]:text-5xl ${
            isClicked === "work-1" ? "animate-clickOpacity" : ""
          }`}
        >
          <span>3+</span>
          <span className="md:text-3xl lg:text-4xl max-[760px]:text-xl">
            Certificates
          </span>
        </Link>
        <Link
          onClick={handleClick("about-1")}
          className={` md:col-span-2 max-[760px]:col-span-2 hover:text-customCol_3 overflow-hidden p-4 flex flex-col text-center rounded-lg bg-black text-4xl font-medium ${
            isClicked === "about-1" ? "animate-clickOpacity" : ""
          }`}
        >
          <span>Skills</span>
          <div>

          <div className="flex gap-6 ml-4 py-4 flex-wrap max-[760px]:justify-between">
            {images.map(({img_name, url})=>(
              <img key={img_name} className="w-24 max-[760px]:w-14 bg-white text-black rounded-lg" src={url} alt={img_name}/>
            ))}
          </div>

          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
