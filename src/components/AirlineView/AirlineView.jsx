import React from "react";
import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

export const AirlineView = ({ airlineName, bidTypesPath }) => {
  return (
    <div className="card">
      <div className="card-body">
      
        <h4 className="display-5 card-title">{airlineName}</h4>
        <p>View the monthly bid data, import history &amp; download statistics.</p>
        <Button href={bidTypesPath} variant="outline-dark" >
          View
        </Button></div>
    </div>  
  );
};

AirlineView.propTypes = {
  airlineName: PropTypes.string.isRequired,
  bidTypesPath: PropTypes.string.isRequired,
};
