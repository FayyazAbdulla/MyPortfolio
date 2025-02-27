import React from "react";
import { Document, Page } from "react-pdf";
import { Container, Row, Col } from "react-bootstrap";
import cv_v2 from "../../Assets/CV/v2/Abdulla's_SE_CV .pdf";


function CV_view({ cvFile }) {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-center">
          <Document file={cv_v2} className="d-flex justify-content-center">
            <Page pageNumber={1} width={500} />
          </Document>
        </Col>
      </Row>
    </Container>
  );
}

export default CV_view;
