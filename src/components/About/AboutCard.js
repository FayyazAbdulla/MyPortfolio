import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">M.F. Abdulla</span> from{" "}
            <span className="purple">Negombo, Sri Lanka.</span>
            <br />
            I am a passionate and results-driven <span className="purple">Software Engineer</span> and <span className="purple">Full-Stack Developer</span>, specializing in building dynamic, high-performance applications using modern technologies like <span className="purple">React.js, Next.js, Node.js, Express.js, MongoDB, and Firebase</span>.
            <br />
            I hold a <span className="purple">Bachelor of Science (B.Sc.)</span> in <span className="purple">Software Engineering & Computer Science</span> from the <span className="purple">University of Bedfordshire</span>, and I am constantly exploring new ways to innovate and solve real-world problems through technology.
            <br />
            <br />
            Besides coding, here are a few activities I enjoy in my free time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building <span className="purple">AI-powered web applications</span> and exploring <span className="purple">computer vision</span> for real-world use cases.
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing <span className="purple">full-stack solutions</span> with <span className="purple">React, Node.js, and MongoDB</span> to create scalable and efficient systems.
            </li>
            <li className="about-activity">
              <ImPointRight /> Innovating with <span className="purple">machine learning</span> and <span className="purple">cloud technologies</span> to enhance user experiences and system performance.
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Strive to build technology that not only solves problems but also creates a meaningful impact!"
          </p>
          <footer className="blockquote-footer">Abdulla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;