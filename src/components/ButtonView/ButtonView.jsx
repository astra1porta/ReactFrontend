import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt, faTimes, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export const ButtonView = ({ backgroundColor, label, buttonType, status }) => {
  return (
    <button
      type="button"
      className={`btn w-100 btn-sm ${backgroundColor} ${buttonType} ${status}`}
    >
      {label === "Retry Import" ? (
        <FontAwesomeIcon icon={faCloudDownloadAlt} />
      ) : (
        ""
      )}
      {label === "Delete" ? <FontAwesomeIcon icon={faTimes} /> : ""}
      {" "}
      {label}{label === "Import History" || label === "Bid Periods" ? (
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      ) : (
        ""
      )}
    </button>
  );
};

ButtonView.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
};

ButtonView.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};