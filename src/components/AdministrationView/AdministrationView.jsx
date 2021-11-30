import React from "react";
import PropTypes from "prop-types";

export const AdministrationView = ({ name }) => {
  return (
    <div className="col-12 col-md-8" >
        <h1 className="display-3 bold">ADMINISTRATION</h1>
        <p className="lead sub-heading">
          Hello {name}! A Website dedicated to the administration of Airline Data.
        </p>
    </div>
  );
};

AdministrationView.propTypes = {
  name: PropTypes.string.isRequired,
};


