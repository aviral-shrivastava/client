import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "React.JS",
    "C++",
    "Python",
    "MySQL",
    "GitHub",
    "MongoDB",
  ]
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src="https://lottie.host/9ef6b1a7-4f05-44be-bc9e-a20438c87a9e/c5FFtJGBe1.json"
            background="transparent"
            speed="1"
            direction="1"
            mode="normal"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            With a strong foundation in software development, I specialize in the MERN stack and have completed various certifications, including courses on Cloud Computing and Computer Networking from renowned platforms like Udemy and Coursera.
            I have hands-on experience in developing innovative projects, such as a Face Recognition Attendance System and an Automatic Number Plate Recognition (ANPR) system. These projects not only enhanced my skills in Python, OpenCV, and Flask but also demonstrated my ability to design scalable solutions that significantly improve efficiency and accuracy.

          </p>
          <p className="text-white">
            My technical proficiency spans across various programming languages, including Python, React.JS, JavaScript, HTML, CSS, C++, and PHP. I am also adept in frameworks and libraries such as Django, Flask, and OpenCV, with a strong grasp of database management using MySQL and PhpMyAdmin.
            In addition to my technical skills, I have a proven track record in competitive programming, having achieved a 5-star rating in C++ proficiency and a 5-star rating in Problem Solving on HackerRank. My commitment to continuous learning and problem-solving has enabled me to tackle over 350 algorithmic challenges successfully.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Technologies that I have worked on -
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
