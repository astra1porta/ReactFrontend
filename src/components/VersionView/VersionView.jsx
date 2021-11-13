import React from "react";
import PropTypes from "prop-types";

export const VersionView = ({version}) => {
  return (
    <>
    <h1 className="display-3">Version</h1>
    <h4>{version}</h4>

    </>
  )
};

VersionView.propTypes = {
  version: PropTypes.string.isRequired,
};