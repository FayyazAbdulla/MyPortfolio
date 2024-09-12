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
            I am currently pursuing a B.Sc. (Hons) in Computer Science and
            Software Engineering at SLIIT Academy.
            <br />
            I have a strong passion for web development, backend systems, and
            applying innovative solutions in technology.
            <br />
            <br />
            Besides coding, here are a few activities I enjoy in my free time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered web applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing full-stack solutions with React,
              Node.js, and MongoDB
            </li>
            <li className="about-activity">
              <ImPointRight /> Innovating with computer vision and machine
              learning for real-world impact
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Constantly innovate and create solutions that make a lasting
            impact!"{" "}
          </p>
          <footer className="blockquote-footer">Abdulla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
