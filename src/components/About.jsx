import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    
    { name: "HTML", image: "/src/assets/icons/html-5.png" },
    { name: "CSS", image: "/src/assets/icons/css.png" },
    { name: "React", image: "/src/assets/icons/physics.png" },
    { name: "Django", image: "/src/assets/icons/django.png" },
    { name: "SQL", image: "/src/assets/icons/sql-server.png" },
    { name: "Data Analysis", image: "/src/assets/icons/data.png" },
    { name: "Visualization|Tableau", image: "/src/assets/icons/web-analytics.png" },
    { name: "Manual Testing", image: "/src/assets/icons/testing.png" },
    { name: "Machine Learning", image: "/src/assets/icons/machine-learning.png" },
    { name: "Python", image: "/src/assets/icons/python-svg.png" },
    { name: "JavaScript", image: "/src/assets/icons/javascript.png" },
    { name: "Java", image: "/src/assets/icons/java.png" },
    { name: "Version Control|Git", image: "/src/assets/icons/git-repo.png" },

  ];

  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <div className="my-3 text-white md:w-2/3 leading-2">
        <p>
          Hi there! I write instructions for computers and make them wise! Simply "a computer programmer":). I am a technology enthusiast, curious about learning new skills, consistent in my tasks, creative in my work, confident in my decisions, determined to achieve my goals, and considerate of others.
        </p>
        <br />
        <p>
          At present, I am a computer science engineering student at MS Ramaiah University of Applied Sciences, Bangalore. I have programming knowledge of Python, the basics of the Intel x86 assembly language, and Matlab. To boot, I am an empathic listener and a persuasive speaker.
        </p>
        <br />
        <p>
          My interest includes <u><i>working with data to explore its ins and outs and testing software</i></u>.
        </p>
        <br />
        <p>
          In brief, I am as pleased as punch that I am and I would be a part of developing new technologies that drive the world. Reach out if there are any forums for discussions or new projects on computers. I would be glad to join you.
        </p>
      </div>

      <div className="md:flex my-7 items-center">
        <div className="text-primary text-3xl font-bold">Skills</div>
      </div>

      {/* Skills section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-light hover:bg-primary p-3 rounded-md text-center shadow-sm transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} className="w-16 h-16 mx-auto" />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default About;
