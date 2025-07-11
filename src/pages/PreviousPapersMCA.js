import React from "react";
import { Card, Button } from "react-bootstrap"; // ✅ Use bootstrap

const pyqpData = {
    "Core Java": [
        { year: 2024, file: "/papers/se_2023.pdf" },
        { year: 2023, file: "/papers/se_2022.pdf" },
    ],
    "DBMS": [
        { year: 2024, file: "/papers/dbms_2023.pdf" },
        { year: 2023, file: "/papers/dbms_2022.pdf" },
    ],
};

const PreviousPapers = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Previous Year Question Papers</h2>
            {Object.keys(pyqpData).map((subject) => (
                <Card className="mb-4" key={subject}>
                    <Card.Body>
                        <Card.Title>{subject}</Card.Title>
                        {pyqpData[subject].map((paper, idx) => (
                            <div
                                key={idx}
                                className="d-flex justify-content-between align-items-center mb-2"
                            >
                                <span>{paper.year}</span>
                                <div className="d-flex gap-2">
                                    <Button
                                        size="sm"
                                        href={paper.file}
                                        target="_blank"
                                        style={{
                                            backgroundColor: "white",
                                            border: "1px solid rgb(235, 235, 235)",
                                            fontWeight: "400",
                                            color:"#0b1a2d"
                                            
                                            
                                        }}
                                    >
                                        Preview
                                    </Button>

                                    <Button
                                        style={{ backgroundColor: "#0b1a2d", border: "none", fontWeight: "400" }}
                                        variant="primary"
                                        size="sm"
                                        href={paper.file}
                                        download
                                    >
                                        Download
                                    </Button>
                                </div>
                            </div>
                        ))}

                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default PreviousPapers;
