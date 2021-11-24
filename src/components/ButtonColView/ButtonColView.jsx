import React from "react";
import ButtonView from "../ButtonView";

export const ButtonColView = () => {
  return (
    <span className="d-grid gap-1 justify-content-end align-items-center">
        <ButtonView backgroundColor="btn-primary" label="Retry Import" />
        <ButtonView backgroundColor="btn-color" label="Bid Periods" />
        <ButtonView backgroundColor="btn-color" label="Import History" />
        <ButtonView backgroundColor="btn-danger" label="Delete" />     
    </span>
  );
};
