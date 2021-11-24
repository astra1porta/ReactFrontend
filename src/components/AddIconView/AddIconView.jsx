import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddIconView = () => {
  return (
    <span className="text-primary">
      <FontAwesomeIcon icon={faPlus} />
    </span>
  );
};
