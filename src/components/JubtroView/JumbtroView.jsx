import React from "react";
import AdministrationView from "../AdministrationView";
import VersionView from "../VersionView";

export const JumbtroView = ({ version, name }) => {
  return (
    <div className="jumbotron d-flex justify-content-center align-items-center">
      <div>
        <AdministrationView name={name} />
        <div className="text-center">
          <VersionView version={version} />
        </div>
      </div>
    </div>
  );
};
