import React from "react";
import { Card, Button } from "react-bootstrap";

const resources = [
    {
        title: "Previous Year Question Papers",
        description: "Download last 5 years' MSC question papers.",
        link: "/resources/mca/questions.zip"
    },
    {
        title: "Books in PDF Format",
        description: "Reference books for all MSC subjects.",
        link: "/resources/mca/books.pdf"
    },
    {
        title: "Full Stack Project Source Code",
        description: "Get complete code and documentation for MSC-level full stack projects.",
        link: "/resources/mca/projects.zip"
    }
];

const MscResources = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">MSC Resources</h2>
            <div className="row">
                {resources.map((res, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{res.title}</Card.Title>
                                <Card.Text>{res.description}</Card.Text>
                                <div className="mt-3 d-flex justify-content-between">
                                    <Button

                                        variant="primary"
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="me-2 btn create-btn"
                                    >
                                        Preview
                                    </Button>
                                    <Button className="btn create-btn" variant="primary" href={res.link} download>
                                        Download
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MscResources;
