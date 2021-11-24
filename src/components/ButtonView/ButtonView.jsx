import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt, faTimes, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export const ButtonView = ({ backgroundColor, label, onClick }) => {
  return (
    <button
      type="button"
      className={["btn", "btn-block", "btn-sm", backgroundColor, onClick].join(
        " "
      )}
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
  onClick: PropTypes.func,
};

ButtonView.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};