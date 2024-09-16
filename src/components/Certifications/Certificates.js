import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificateCard";
import Particle from "../Particle";

// Import PDF's for Display on Certification Page 
import c1 from "../../Assets/Certifications/23HoH9.pdf"
import c2 from "../../Assets/Certifications/2iDOKs.pdf";
import c3 from "../../Assets/Certifications/Abdulla Fayyaz DevTown.pdf"
import c4 from "../../Assets/Certifications/Abdulla Fayyaz Google Certifiacet.pdf"
import c5 from "../../Assets/Certifications/Abdulla Fayyaz Micro soft.pdf"
import c6 from "../../Assets/Certifications/iD0ui.pdf"
import c7 from "../../Assets/Certifications/YNdYf.pdf"

// Import images for Project
import sc1 from "../../Assets/Certifications/Certificate_Ss/Front-End Development with React.js & JavaScript July 2023.png";
import sc2 from "../../Assets/Certifications/Certificate_Ss/7-day Bootcamp on Python & Artificial Intelligence.png";
import sc3 from "../../Assets/Certifications/Certificate_Ss/Back-End Development with JavaScript, Node.js & Express.js June 2023.png";
import sc4 from "../../Assets/Certifications/Certificate_Ss/Google Certification for Git, GitHub & Version Control.png";
import sc5 from "../../Assets/Certifications/Certificate_Ss/Microsoft Certification for Web Development using JavaScript, Node.js & Express Bootcamp.png";
import sc6 from "../../Assets/Certifications/Certificate_Ss/DevTown Certification for Python.png";
import sc7 from "../../Assets/Certifications/Certificate_Ss/Certification for completing 7-day Bootcamp with DevTown on HotStar Clone using HTML, CSS, and JavaScript.png";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
  My <strong className="purple">Certificates</strong>
</h1>
<p style={{ color: "white" }}>
  Here are a few certificates I’ve earned recently.
</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c1}  // Path to your first PDF
    imgPath={sc1}
    title="Front-End Development with React.js & JavaScript July 2023"
    description="This certification showcases proficiency in building interactive and responsive user interfaces using React.js and JavaScript, covering advanced concepts such as state management, hooks, and component lifecycle."
  />
</Col>

<Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c2}  // Path to your second PDF
    imgPath={sc2}
    title="7-day Bootcamp on Python & Artificial Intelligence"
    description="Awarded for completing an intensive bootcamp focusing on Python programming and foundational AI concepts, including machine learning, neural networks, and AI-based applications."
  />
</Col>

<Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c3}  // Path to your third PDF
    imgPath={sc3}
    title="Back-End Development with JavaScript, Node.js & Express.js June 2023"
    description="This certificate recognizes skills in building scalable server-side applications using Node.js and Express.js, with a focus on REST APIs, middleware, and backend logic for full-stack development."
  />
</Col>

<Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c4}  // Path to your fourth PDF
    imgPath={sc4}
    title="Google Certification for Git, GitHub & Version Control"
    description="Google certification awarded for mastering version control systems, particularly Git and GitHub, with an emphasis on collaboration, branching strategies, and repository management."
  />
</Col>

<Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c5}  // Path to your fifth PDF
    imgPath={sc5}
    title="Microsoft Certification for Web Development using JavaScript, Node.js & Express Bootcamp"
    description="Recognizes successful completion of a Microsoft-led bootcamp focused on web development using JavaScript, Node.js, and Express, including building and deploying full-stack applications."
  />
</Col>

<Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c6}  // Path to your sixth PDF
    imgPath={sc6}
    title="DevTown Certification for Python"
    description="Awarded for proficiency in Python, covering key programming concepts, algorithms, and real-world applications through hands-on training sessions."
  />
</Col>

<Col md={4} className="project-card">
  <CertificationCard
    pdfPath={c7}  // Path to your seventh PDF
    imgPath={sc7}
    title="Certification for completing 7-day Bootcamp with DevTown on HotStar Clone using HTML, CSS, and JavaScript"
    description="Recognizes the ability to build web applications from scratch, with a focus on front-end technologies such as HTML, CSS, and JavaScript through the development of a HotStar clone project."
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
