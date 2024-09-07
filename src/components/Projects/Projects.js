import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import lankaTradingImage from "../../Assets/Projects/Lanka-Trading-Enterprises.png";
import VSM from "../../Assets/Projects/4 about Visual-Salah-Moniter.png";
import TAQ from "../../Assets/Projects/TAQ.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VSM}
              isBlog={false}
              title="Visual Salah Monitor"
              description="A real-time Salah posture monitoring tool using TensorFlow.js PoseNet and React. Provides instant feedback on prayer postures with educational support, including posture guides and relevant Dua explanations. The system is designed for Muslims to improve their Salah, with special focus on new converts."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TAQ}
              isBlog={false}
              title="Tomato Adventure Quest"
              description="An engaging web-based game built using React for the front-end, Node.js for the back-end, and MongoDB for data storage. The game features user authentication with secure login and registration, a dynamic game interface with a timer, restart options, and hearts representing lives. The game communicates with a university-provided Tomato game API to deliver real-time gameplay and updates, including a live scoreboard. Players can view their accumulated score and profile details."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lankaTradingImage} // Replace with appropriate image
              isBlog={false}
              title="Lanka Trading Enterprise E-Commerce"
              description="An E-Commerce platform built for a hardware business using React.js and Firebase. The platform offers a seamless shopping experience, featuring a user-friendly interface, secure backend operations, and a 24-hour customer service chatbot. It also integrates product management, allowing the admin to add, update, and manage inventory effortlessly."
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
