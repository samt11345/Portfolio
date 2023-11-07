import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  // Replace 'https://www.linkedin.com/in/samuel-williams-689591270/' with your LinkedIn profile URL
  const linkedinProfileUrl = "https://www.linkedin.com/in/samuel-williams-689591270/";
  const instagramProfileUrl = "https://www.instagram.com/samt11345/";
  const githubProfileUrl = "https://github.com/samt11345";

  return (
    <div id="Main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1534695372029-851603947dd5?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Samuel Williams
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full ">
            {/* Replace 'https://www.linkedin.com/in/samuel-williams-689591270/' with your LinkedIn profile URL */}
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
           {/* Replace 'https://www.instagram.com/samt11345/' with your Instagram profile URL */}
           <a href = {instagramProfileUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer" size={20} />
           </a>
            {/* Replace 'https://github.com/samt11345/' with your GitHub profile URL */}
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
