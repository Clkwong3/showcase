import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="home">
      {/* Cover Image */}
      <img
        className="w-full h-screen object-cover object-center"
        src="https://images.unsplash.com/photo-1598838449762-d967ae4546a5?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="SF Windmill"
      />

      {/* Introduction Section */}
      <div className="w-full h-screen absolute top-0 left-0 bg-slate-500/40">
        {/* Centered Container with Max Width */}
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          {/* Greeting */}
          <h1 className="sm:text-5xl text-4xl font-bold">Hello</h1>

          {/* Animated Typing Effect */}
          <h2 className="flex sm:text-3xl text-2xl pt-4">
            I am a
            <TypeAnimation
              sequence={[
                "Aspiring Developer",
                2500, // wait 2.5s before replacing the substring with the next one
                "Tech Enthusiast",
                2500,
                "Continuous Learner",
                2500,
                "Budding Programmer",
                2500,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                color: "white",
              }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
