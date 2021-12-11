import React from "react";
import FilterIconView from "../FilterIconView";
import AddIconView from "../AddIconView";
import { RefreshIconView } from "../RefreshIconView/RefreshIconView";

export const IconColHeaderView = () => {
  return (
    <div className="d-flex justify-content-end px-2 gap-2"><FilterIconView />{"  "}<AddIconView />{"  "}<RefreshIconView /></div>
  );
};
