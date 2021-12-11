import React from "react";
import ButtonView from "../ButtonView";

export const ButtonColView = ({status}) => {
  return (
    <span className="d-grid gap-1 justify-content-end align-items-center">
      <ButtonView
        backgroundColor="btn-primary"
        label="Retry Import"
        buttonType="import-btn"
        status={status}
      />
      <ButtonView
        backgroundColor="btn-color"
        label="Bid Periods"
        buttonType="bidPeriod-btn"
        status={status}
      />
      <ButtonView
        backgroundColor="btn-color"
        label="Import History"
        buttonType="importHistory-btn"
        status={status}
      />
      <ButtonView
        backgroundColor="btn-danger"
        label="Delete"
        buttonType="delete-btn"
        status={status}
      />
      <ButtonView
        backgroundColor="btn-danger"
        label="Cancel"
        buttonType="cancel-btn"
        status={status}
      />
    </span>
  );
};
