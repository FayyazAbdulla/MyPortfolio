import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//Import images for Project
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Debra from "../../Assets/Projects/DebraEventManagement .jpeg"
import lankaTradingImage from "../../Assets/Projects/Lanka-Trading-Enterprises.png";
import VSM from "../../Assets/Projects/4 about Visual-Salah-Moniter.png";
import TAQ from "../../Assets/Projects/TAQ.png";
import omacgroups from "../../Assets/Omac-Groups.png";
import CinePlex from "../../Assets/home - Cineplex-Movie-Theatre-in-Kandy.png";
import JSON_File_Manager from "../../Assets/Admin DashBoard Page - ION-Assignment.png.png";


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
              demoLink="https://drive.google.com/file/d/1G0qIulufCeWpj77Ywwn1mOQK0CtA9ROO/view?usp=drive_link"  // Demo Link
            /> 
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TAQ}
              isBlog={false}
              title="Tomato Adventure Quest"
              description="An engaging web-based game built using React for the front-end, Node.js for the back-end, and MongoDB for data storage. The game features user authentication with secure login and registration, a dynamic game interface with a timer, restart options, and hearts representing lives. The game communicates with a university-provided Tomato game API to deliver real-time gameplay and updates, including a live scoreboard. Players can view their accumulated score and profile details."
              demoLink="https://github.com/FayyazAbdulla/Tomato-adventure-quest-2404319.git"  // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Debra} // Replace with appropriate image
              isBlog={false}
              title="Debra Event Management"
              description="Debra Event Management is an event booking system designed for a renowned event management company in Singapore. The platform enables partners to register, create events, manage ticket sales, and track event performance. It also allows Debra to oversee all events, view sales reports, and calculate earnings with variable commission rates. Built using a SOC-based architecture, the system integrates with external companies, social media, and mobile apps to streamline ticket sales across multiple channels."
              demoLink="https://github.com/FayyazAbdulla/DebraEventManagement/tree/master"  // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JSON_File_Manager} // Replace with appropriate image
              isBlog={false}
              title="JSON File Manager Web App"
              description="Developed a web application enabling users to upload, view, download, and delete JSON files. Built with a React frontend and Node.js backend, the system integrates MongoDB via Mongoose for file management and uses Multer for file uploads. The dashboard is responsive and user-friendly, enhancing efficiency in file operations."
              demoLink="https://github.com/FayyazAbdulla/ION-Assignment.git"  // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lankaTradingImage} // Replace with appropriate image
              isBlog={false}
              title="Lanka Trading Enterprise E-Commerce"
              description="An E-Commerce platform built for a hardware business using React.js and Firebase. The platform offers a seamless shopping experience, featuring a user-friendly interface, secure backend operations, and a 24-hour customer service chatbot. It also integrates product management, allowing the admin to add, update, and manage inventory effortlessly."
              demoLink="https://github.com/FayyazAbdulla/SPPM_LTE.git"  // Demo Link
              VdemoLink="https://sppm-lte.vercel.app/"  // VDemo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omacgroups} // Replace with appropriate image
              isBlog={false}
              title="OMAC GROUPS Customer Relationship Managment Web App"
              description="Developed a modern Customer Relationship Management (CRM) system for OMAC Groups (Travel Agency) using React+Vite and Firebase. The system streamlines customer interactions, manages bookings, and enhances client experience by providing a secure, scalable, and responsive platform, tailored for efficient travel service management."
              demoLink="https://omacgroups.vercel.app/"  // Demo Link
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CinePlex} // Replace with appropriate image
              isBlog={false}
              title="Cineplex"
              description="The Cineplex Management System is a comprehensive web-based application designed for managing a cineplex's operations. It includes features for user management, movie management, bookings, and reporting. Built using PHP, MySQL, and modern web technologies, the system provides both admin and customer-facing functionalities with role-based access control."
              demoLink="https://omacgroups.vercel.app/"  // Demo Link
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
