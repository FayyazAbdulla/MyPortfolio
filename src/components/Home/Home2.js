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
              I am driven by the passion for creating meaningful technology
              solutions, leveraging my experience in programming languages and
              frameworks to build scalable systems and impactful applications.
              <br />
              <br />
              <b className="purple">Key Skills:</b>
              <ul>
                <li>
                  <i>
                    <b className="purple">
                      React, Node.js, MongoDB, Python, PHP
                    </b>
                  </i>
                </li>
                <li>Full-stack development</li>
                <li>Backend systems</li>
              </ul>
              <br />
              During my internship at {" "}
              <b className="purple">Ceylon Dazzling Dev Holding (Pvt.) Ltd.</b>
              <ul>
                <li>
                  I developed a Python web scraper using{" "}
                  <b className="purple">Selenium WebDriver</b> and a headless
                  Chrome browser.
                </li>
                <li>
                  Extracted complex medical data from UpToDate.com, enhancing my
                  ability to work autonomously and solve technical challenges.
                </li>
              </ul>
              <br />
              One of my most rewarding experiences was serving as the {" "}
              <b className="purple">Start-up Manager</b> for the
              <b className="purple">
                Lanka Trading Enterprise E-Commerce Project
              </b>
              , where I:
              <ul>
                <li>
                  Led a team to develop a robust online store for a hardware
                  business.
                </li>
                <li>
                  Implemented a <b className="purple">responsive design</b> and
                  a secure backend using
                  <b className="purple">Firebase</b>.
                </li>
                <li>
                  Integrated a{" "}
                  <b className="purple">24-hour customer service chatbot</b> to
                  enhance user experience.
                </li>
                <li>
                  Oversaw both frontend and backend development while ensuring
                  effective team collaboration.
                </li>
                <li>
                  Contributed significantly to strategic planning and system
                  development, boosting the business's digital presence.
                </li>
              </ul>
              <br />
              <b className="purple">Other Projects:</b>
              <ul>
                <li>
                  <b className="purple">
                    Leather Fashion Shop Management Web Application
                  </b>
                </li>
                <li>
                  <b className="purple">Delivery Service Web Application</b>
                </li>
              </ul>
              <br />
              Another key project is the
              <b className="purple">Visual Salah Monitor</b>, which uses:
              <ul>
                <li>
                  <b className="purple">Computer Vision</b> for real-time
                  posture detection during Salah.
                </li>
                <li>
                  Provides users with instant feedback and guidance during
                  prayer.
                </li>
              </ul>
              <br />I am passionate about applying{" "}
              <b className="purple">Computer Vision</b> and
              <b className="purple">Machine Learning</b> in real-world
              applications, using tools like
              <b className="purple">React.js, Node.js,</b> and{" "}
              <b className="purple">MongoDB</b> to create efficient and scalable
              systems.
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
                  href="https://twitter.com/Soumyajit4419"
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
