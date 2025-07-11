import React from "react";
import { Card, Button } from "react-bootstrap";

const books = [
    { title: "Core Java", file: "/books/os.pdf" },
    { title: "Data Structures", file: "/books/ds.pdf" },
    { title: "DBMS", file: "/books/dbms.pdf" },
    { title: "Computer Networks", file: "/books/cn.pdf" }
];

const BooksMCA = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Books in PDF Format</h2>
            <div className="row">
                {books.map((book, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <div className="d-flex gap-2">
                                    <Button
                                        size="sm"
                                        href={book.file}
                                        target="_blank"
                                        style={{
                                            backgroundColor: "white",
                                            border: "1px solid rgb(235, 235, 235)",
                                            fontWeight: "400",
                                            color: "#0b1a2d"


                                        }}
                                    >
                                        Preview
                                    </Button>

                                    <Button
                                        style={{ backgroundColor: "#0b1a2d", border: "none", fontWeight: "400" }}
                                        variant="primary"
                                        size="sm"
                                        href={book.file}
                                        download
                                    >
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

export default BooksMCA;
