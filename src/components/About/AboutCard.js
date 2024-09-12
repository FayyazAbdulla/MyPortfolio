import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">M.F. Abdulla</span> {" "}
          from <span className="purple">Negombo, Sri Lanka.</span>
          <br />
          I am currently pursuing a B.Sc. (Hons) in Computer Science and
          Software Engineering at <span className="purple">SLIIT City Uni</span>.
          <br />
          I have a strong passion for web development, backend systems, and
          applying innovative solutions in technology. One of my key projects is 
          the <span className="purple">Visual Salah Monitor</span>, which combines 
          my technical skills with my commitment to making a meaningful impact.
          <br />
          <br />
          The <span className="purple">Visual Salah Monitor</span> is an AI-driven 
          web application designed to help Muslims improve their Salah (prayer) 
          postures by providing real-time feedback using computer vision. By leveraging 
          TensorFlow’s PoseNet model, the system tracks key body landmarks and assesses 
          the accuracy of prayer postures. The application includes:
          <ul>
            <li>
              Real-time posture detection using a webcam for instant feedback on Salah positions.
            </li>
            <li>
              Upload feature to analyze a still image of a prayer posture, providing 
              detailed feedback, including posture instructions, common mistakes, and Duas with 
              English translations.
            </li>
            <li>
              A user-friendly React-based interface, combined with a Node.js and MongoDB backend 
              for secure data management and user profile support.
            </li>
            <li>
              Educational support for newly converted Muslims, with detailed explanations of the 
              postures and Duas.
            </li>
          </ul>
          <br />
          My goal is to continuously improve the system to make it more accessible 
          and helpful for the community.
          <br />
          <br />
          Besides coding, here are a few activities I enjoy in my free time:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Competitive Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Exploring AI and Machine Learning
          </li>
          <li className="about-activity">
            <ImPointRight /> Traveling and Discovering New Cultures
          </li>
        </ul>
  
        <p style={{ color: "rgb(155 126 172)" }}>
          "Constantly innovate and create solutions that make a lasting impact!"{" "}
        </p>
        <footer className="blockquote-footer">Abdulla</footer>
      </blockquote>
    </Card.Body>
  </Card>
  
  );
}

export default AboutCard;
