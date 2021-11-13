import React from "react";
import {Container} from "react-bootstrap";
import PropTypes from "prop-types";

export const AdministrationView = ({ name }) => {
  return (
    <main>
      <Container>
        <h1 className="display-3">Administration</h1>
        <p className="lead">
          Hello {name}! A Website dedicated to the administration of Airline
          Data.
        </p>
      </Container>
    </main>
  );
};

AdministrationView.propTypes = {
  name: PropTypes.string.isRequired,
};


