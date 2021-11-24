import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export const FilterIconView = () => {
  return (
    <span className="text-primary">
      <FontAwesomeIcon icon={faFilter} />
    </span>
  );
};
