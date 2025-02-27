import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import abdpic from "../../Assets/abdpic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate and results-driven Software Engineer and Full-Stack Developer with a strong foundation in web development, scalable architectures, and distributed systems. I specialize in building dynamic, high-performance applications using modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and Firebase.
              <br />
              <br />
              <b className="purple">Key Skills:</b>
              <ul>
                <li>React.js, Next.js, Node.js, Express.js, MongoDB, Firebase</li>
                <li>Full-stack development (Frontend & Backend)</li>
                <li>RESTful APIs, Cloud Integration, DevOps</li>
                <li>Responsive UI Design with Tailwind CSS and Bootstrap</li>
              </ul>
              <br />
              During my internship at{" "}
              <b className="purple">CDAZZDEV (Ceylon Dazzling Dev Holding PVT LTD)</b>
              <ul>
                <li>
                  I developed web scraping solutions using <b className="purple">Python</b> to extract and analyze data efficiently.
                </li>
                <li>
                  Collaborated with a dynamic team to solve real-world technical challenges and enhance system performance.
                </li>
                <li>
                  Gained hands-on experience in coding, debugging, and optimizing applications for better efficiency and scalability.
                </li>
              </ul>
              <br />
              As a <b className="purple">Freelance Software Engineer</b>, I have:
              <ul>
                <li>
                  Designed and developed dynamic, scalable web applications using <b className="purple">React.js, Next.js, and Node.js</b>.
                </li>
                <li>
                  Built and optimized RESTful APIs and backend services with <b className="purple">Node.js, Express.js, and MongoDB</b>.
                </li>
                <li>
                  Integrated <b className="purple">Firebase</b> for real-time database management, authentication, and cloud storage solutions.
                </li>
                <li>
                  Created responsive, user-friendly interfaces using <b className="purple">Tailwind CSS, Bootstrap, and modern UI/UX practices</b>.
                </li>
                <li>
                  Deployed and maintained full-stack applications, ensuring high performance, security, and scalability.
                </li>
              </ul>
              <br />
              <b className="purple">Notable Projects:</b>
              <ul>
                <li>
                  <b className="purple">Visual Salah Monitor:</b> A real-time Salah posture monitoring tool using <b className="purple">TensorFlow.js PoseNet</b> and <b className="purple">React</b>. It provides instant feedback on prayer postures with educational support, including posture guides and relevant Dua explanations.
                </li>
                <li>
                  <b className="purple">Tomato Adventure Quest:</b> An engaging web-based game built using <b className="purple">React</b> for the front-end, <b className="purple">Node.js</b> for the back-end, and <b className="purple">MongoDB</b> for data storage. The game features user authentication, a dynamic game interface, and a live scoreboard.
                </li>
                <li>
                  <b className="purple">Lanka Trading Enterprise E-Commerce:</b> Developed an e-commerce platform for a hardware business using <b className="purple">React.js</b> and <b className="purple">Firebase</b>, featuring a seamless shopping experience, secure backend operations, and a 24/7 customer service chatbot.
                </li>
                <li>
                  <b className="purple">OMAC Groups Ticketing Agency Website:</b> Developed a modern static website using <b className="purple">React, Bootstrap, and Firebase</b>, enabling seamless ticket booking, inquiries, and support services.
                </li>
                <li>
                  <b className="purple">FortGrandJewels BillingApp:</b> A sleek and efficient invoicing solution tailored for FortGrandJewels, built with <b className="purple">Next.js</b> and <b className="purple">Firebase</b>, ensuring professional, premium-quality invoices.
                </li>
              </ul>
              <br />
              I am passionate about applying <b className="purple">Computer Vision</b> and <b className="purple">Machine Learning</b> in real-world applications, using tools like <b className="purple">React.js, Node.js, and MongoDB</b> to create efficient and scalable systems.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={abdpic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FayyazAbdulla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Abdullafayyaz229"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/m-f-abdulla-05346a226/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abd_official28?igsh=MWVnOXp3bXUwdXJtOA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;