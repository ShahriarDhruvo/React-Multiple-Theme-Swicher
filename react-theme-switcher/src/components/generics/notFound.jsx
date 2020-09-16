import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = (props) => (
    <div id="notfound">
        <div className="notfound pb-6">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2 className="mb-3 mt-5 pt-3">
                Oops! This Page Could Not Be Found
            </h2>
            <p>
                Sorry but the page you are looking for does not exist, have been
                removed. name changed or is temporarily unavailable
            </p>
            <Button variant="main" className="mt-3" as={Link} to="/">
                Go To Homepage
            </Button>
            <Button
                variant="main"
                className="mt-3 ml-2"
                onClick={() => props.history.goBack()}
            >
                Go Back
            </Button>
        </div>
    </div>
);

export default NotFound;
