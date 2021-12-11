import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const AddPilotButtonView = ({ airlineLink }) => (
  <Button as={Link} to={airlineLink} variant="outline-primary">
    Add Pilot{" "}
  </Button>
);

AddPilotButtonView.propTypes = {
  airlineLink: PropTypes.string.isRequired,
};
