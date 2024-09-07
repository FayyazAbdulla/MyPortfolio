import React, { useState, useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import abdCVpdf from "../../Assets/../Assets/Abdulla's Updated CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(width > 786 ? 1.7 : 0.6);
  const [isLoading, setIsLoading] = useState(true);

  // Update window width on load
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Handle successful document load
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  // Handle page navigation
  const goToPrevPage = () => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
  const goToNextPage = () => setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages);

 

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={abdCVpdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            aria-label="Download CV"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>


        {/* PDF Loading Spinner */}
        <Row className="resume">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Loading CV...</p>
            </div>
          )}
          {/* Display PDF Document */}
          <Document
            file={abdCVpdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
            onLoadError={(error) => console.log("Error while loading the document!", error)}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </Row>

        {/* Page Navigation Controls */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            Previous
          </Button>
          <span className="mx-3">Page {pageNumber} of {numPages}</span>
          <Button onClick={goToNextPage} disabled={pageNumber >= numPages}>
            Next
          </Button>
        </Row>

        {/* Download Button (Repeated for better UX) */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={abdCVpdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            aria-label="Download CV"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
