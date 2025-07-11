import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const resources = [
    {
        title: "MCA Syllabus",
        description: "Download Syllabus",
        link: "/resources/mca/mcasyllabus.pdf"
    },
    {
        title: "Previous Year Question Papers",
        description: "Download last 5 years' MCA question papers.",
        route: "/resources/mca/pyqp"
    },
    {
        title: "Books in PDF Format",
        description: "Reference books for all MCA subjects.",
        route: "/resources/mca/books"
    }
];


const courses = [
    {
        title: "Cyber Security",
        route: "/courses/mca/cybersecurity"
    },
    {
        title: "Mysql",
        route: "/courses/mca/mysql"
    },
    
];

const McaResources = () => {
    const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <h2 className="text-left mb-4">MCA Resources</h2>
            <div className="row">
                {resources.map((res, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{res.title}</Card.Title>
                                <Card.Text>{res.description}</Card.Text>
                                <div className="mt-3 d-flex justify-content-between">
                                    <Button className="btn create-btn" variant="primary" onClick={() => navigate(res.route)}>
                                        Download
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="container mt-5">
                <h4 className="text-left mb-4">Online Certifications</h4>
                <div className="row">
                    {courses.map((res, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>{res.title}</Card.Title>
                                    <Card.Text>{res.description}</Card.Text>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <Button className="btn create-btn" variant="primary" onClick={() => navigate(res.route)}>
                                            Enroll Now
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default McaResources;
