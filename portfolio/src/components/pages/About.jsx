import React from "react";
import certificate_1 from "../../assets/images/web_development_certificate.png";
import certificate_2 from "../../assets/images/js_certificate.png";
import certificate_3 from "../../assets/images/frontend_libraries_certificate.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#48329C,_#1C1A1A)] roboto-slab-new p-4">
      <div className=" h-auto p-8 bg-black rounded-lg ">
        <h1 className="text-customCol_3 text-4xl text-center mb-4 font-semibold max-[760px]:text-3xl">
          #About Me
        </h1>
        <p className="roboto-slab-new text-purple-300 text-2xl leading-relaxed md:mx-8 max-[760px]:text-xl">
          I'm a second-year Software Engineering student at the Informatics
          Institute of Technology (IIT). eager to apply my coding skills in a
          dynamic and creative environment. Interest in backend development,
          mobile app development, and web development. I'm passionate about
          exploring new technologies and using my knowledge on practical
          projects to grow and contribute to the success of my team.
        </p>
      </div>
      <div className="bg-black rounded-lg p-1 my-4">
        <h1 className="text-customCol_3 my-auto mx-auto text-4xl text-center mb-4 font-semibold max-[760px]:text-3xl">
          Certifications
        </h1>
      </div>
      <div className="grid max-[767px]:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black rounded-lg p-6">
          <a href="https://www.freecodecamp.org/certification/fcce8b4335d-c630-4643-b1a9-f31286e12f0f/responsive-web-design">
            <img
              src={certificate_1}
              alt="Responsive Web Designing Certificate"
            />
          </a>
        </div>
        <div className="bg-black rounded-lg p-6">
          <a href="https://www.freecodecamp.org/certification/fcce8b4335d-c630-4643-b1a9-f31286e12f0f/javascript-algorithms-and-data-structures-v8">
            <img src={certificate_2} alt="JavaScript Certificate" />
          </a>
        </div>
        <div className="bg-black rounded-lg p-6">
          <a href="https://www.freecodecamp.org/certification/fcce8b4335d-c630-4643-b1a9-f31286e12f0f/front-end-development-libraries">
            <img src={certificate_3} alt="Frontend Libraries Certificate" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
