import React from "react";
import PropTypes from "prop-types";
import PilotView from "../PilotView";


export function PilotsListView({pilots}) {
  return (
   <div className="box">
      <h1>Pilots</h1>
      <p>Home / App Views / Contacts</p>
    <div className="d-flex flex-wrap g-3">
      {pilots.map((pilot) => (
        <PilotView pilot = {pilot} avatar = {pilot.avatar}/>
      ))}
        
    </div>
  </div>
  );
}

PilotsListView.propTypes = {
  pilots: PropTypes.object.isRequired,
  avatar: PropTypes.shape({src: PropTypes.object, alt: PropTypes.string}).isRequired,
};
