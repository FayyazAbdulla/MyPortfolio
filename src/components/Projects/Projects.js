import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//Import images for Project
import Debra from "../../Assets/Projects/DebraEventManagement .jpeg";
import lankaTradingImage from "../../Assets/Projects/LTE.png";
import VSM from "../../Assets/Projects/4 about Visual-Salah-Moniter.png";
import TAQ from "../../Assets/Projects/TAQ.png";
import omacgroups from "../../Assets/Projects/OMAC-CRM.png";
import omacpublic from "../../Assets/Projects/OGPublic1.png";
import CinePlex from "../../Assets/Projects/CineplexC.png";
import JSON_File_Manager from "../../Assets/Admin DashBoard Page - ION-Assignment.png.png";
import fortgrandjewels from "../../Assets/Projects/fortgrandjewels1.png";
import zenithrentcar from "../../Assets/Projects/Zenith-Car-Rental-System.png";

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
              demoLink="https://drive.google.com/file/d/1G0qIulufCeWpj77Ywwn1mOQK0CtA9ROO/view?usp=drive_link" // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TAQ}
              isBlog={false}
              title="Tomato Adventure Quest"
              description="An engaging web-based game built using React for the front-end, Node.js for the back-end, and MongoDB for data storage. The game features user authentication with secure login and registration, a dynamic game interface with a timer, restart options, and hearts representing lives. The game communicates with a university-provided Tomato game API to deliver real-time gameplay and updates, including a live scoreboard. Players can view their accumulated score and profile details."
              demoLink="https://github.com/FayyazAbdulla/Tomato-adventure-quest-2404319.git" // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Debra} // Replace with appropriate image
              isBlog={false}
              title="Debra Event Management"
              description="Debra Event Management is an event booking system designed for a renowned event management company in Singapore. The platform enables partners to register, create events, manage ticket sales, and track event performance. It also allows Debra to oversee all events, view sales reports, and calculate earnings with variable commission rates. Built using a SOC-based architecture, the system integrates with external companies, social media, and mobile apps to streamline ticket sales across multiple channels."
              demoLink="https://github.com/FayyazAbdulla/DebraEventManagement/tree/master" // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JSON_File_Manager} // Replace with appropriate image
              isBlog={false}
              title="JSON File Manager Web App"
              description="Developed a web application enabling users to upload, view, download, and delete JSON files. Built with a React frontend and Node.js backend, the system integrates MongoDB via Mongoose for file management and uses Multer for file uploads. The dashboard is responsive and user-friendly, enhancing efficiency in file operations."
              demoLink="https://github.com/FayyazAbdulla/ION-Assignment.git" // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lankaTradingImage} // Replace with appropriate image
              isBlog={false}
              title="Lanka Trading Enterprise E-Commerce"
              description="An E-Commerce platform built for a hardware business using React.js and Firebase. The platform offers a seamless shopping experience, featuring a user-friendly interface, secure backend operations, and a 24-hour customer service chatbot. It also integrates product management, allowing the admin to add, update, and manage inventory effortlessly."
              demoLink="https://github.com/FayyazAbdulla/SPPM_LTE.git" // Demo Link
              VdemoLink="https://sppm-lte.vercel.app/" // VDemo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omacgroups} // Replace with appropriate image
              isBlog={false}
              title="OMAC Groups CRM System"
              description="A comprehensive Customer Relationship Management (CRM) web application designed for OMAC Groups, a travel agency. Built with React+Vite and Firebase, this app efficiently organizes customer inquiries, stores client details, and manages bookings. It provides a secure, scalable, and responsive interface that enhances customer service and streamlines operations in the travel sector."
              demoLink="https://github.com/FayyazAbdulla/omacgroups" // Demo Link
              VdemoLink="https://omacgroups.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omacpublic} // Replace with appropriate image
              isBlog={false}
              title="OMAC Groups Ticketing Agency Website"
              description="A modern, user-friendly static website for OMAC Groups, a ticketing agency, built with React, Bootstrap, and Firebase. This site enables users to explore travel options, book tickets, and access support services. Integrated with Firebase and EmailJS, it securely handles inquiries, contact forms, and newsletter sign-ups, providing instant notifications and a seamless user experience."
              demoLink="https://github.com/FayyazAbdulla/flyomac.lk" // Demo Link
              VdemoLink="https://flyomaclk-abduls-projects-b242d1a8.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CinePlex} // Replace with appropriate image
              isBlog={false}
              title="Cineplex"
              description="The Cineplex Management System is a comprehensive web-based application designed for managing a cineplex's operations. It includes features for user management, movie management, bookings, and reporting. Built using PHP, MySQL, and modern web technologies, the system provides both admin and customer-facing functionalities with role-based access control."
              demoLink="https://github.com/FayyazAbdulla/Cineplex" // Demo Link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fortgrandjewels}
              isBlog={false}
              title="FortGrandJewels"
              description="**BillingApp for FortGrandJewels**  
BillingApp is a sleek and efficient invoicing solution tailored for FortGrandJewels, designed to produce professional, premium-quality invoices that align with the brand's luxurious identity. Utilizing Next.js for a responsive interface, Firebase for real-time data management, and PDF.js for seamless PDF generation, the app simplifies billing workflows while ensuring elegance and precision in every invoice."
              demoLink="" // Demo Link
              viewpdf="https://drive.google.com/file/d/1eTJ5iaIeC6pZpfM7Mfh4iOpRux-8ohoV/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zenithrentcar}
              isBlog={false}
              title="Zenith Rent Car Management System"
              description="The **Zenith Rent Car Management System** streamlines car rental operations with features like automated PDF invoice generation, mileage tracking, revenue insights, and fuel monitoring. Built using React+Vite, Tailwind CSS, Firebase, and PDF.js, it offers a modern, secure, and efficient solution for rental businesses to optimize performance and enhance decision-making."
              demoLink="" // Demo Link
              viewpdf="https://drive.google.com/file/d/1oQhG_UZ0gIu-C56jxrmsgIPMAaNT5vus/view?usp=sharing"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
