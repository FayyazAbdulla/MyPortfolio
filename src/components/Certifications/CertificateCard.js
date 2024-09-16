import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
       {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      )}
      {/* If there's a PDF, show a button to view/download it */}
      {props.pdfPath ? (
        <Button variant="primary" href={props.pdfPath} target="_blank">
          View {props.title} PDF
        </Button>
      ) : (
        <p>No PDF available</p>
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CertificationCard;
