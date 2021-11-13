import React from "react";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

export const AirlineView = ({ airlineName, bidproPath }) => {
  return (
    <div className="card">
      <div className="card-body">
      
        <h1 className="display-4 card-title">{airlineName}</h1>
        <p>View the monthly bid data, import history &amp; download statistics.</p>
        <Button href={bidproPath} variant="outline-dark" >
          View
        </Button></div>
    </div>  
    
  );
};

AirlineView.propTypes = {
  airlineName: PropTypes.string.isRequired,
  airlinePath: PropTypes.string.isRequired,
};
