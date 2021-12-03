import React from "react";
import AdministrationView from "../AdministrationView";
import VersionView from "../VersionView";
import PropTypes from "prop-types";

export const JumbtroView = ({ version, name }) => {
  return (
    <div className="jumbotron d-flex justify-content-center align-items-center row">
      <AdministrationView name={name} />
      <VersionView version={version} />
    </div>
  );
};

JumbtroView.propTypes = {
  firstName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};
