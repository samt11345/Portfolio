import React from "react";
import {TypeAmimation} from "react-type-nimation";

const Main = () => {
  return (
    <div id="Main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1534695372029-851603947dd5?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 bg-white/50">
        <div>
          <h1>I'm Samuel Williams</h1>
          <h2>
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                1000,
                "We produce food for Guinea Pigs",
                1000,
                "We produce food for Chinchillas",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
