import React from "react";
import PropTypes from "prop-types";

export const VersionView = ({version}) => {
  return (
    <div className="col-12 col-md-4 text-center">
      <h1 className="display-3">Version</h1>
      <h4>{version}</h4>
    </div>
  )
};

VersionView.propTypes = {
  version: PropTypes.string.isRequired,
};