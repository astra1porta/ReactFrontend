import React from "react";
import {PilotAvatarView} from "../PilotAvatarView/PilotAvatarView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export const PilotView = ({avatar, pilot}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0 mt-3">
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="px-5">
          <PilotAvatarView avatar={avatar} />
          </div>
          <div>
            {pilot.seat}{" "}{pilot.fleet}
          </div>
          <div>{pilot.domicile}</div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{pilot.name}</h4>
            <p className="card-text">
              <span className="text-secondary">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>{" "}
              {pilot.location}
            </p>
            <p className="card-title">
              <h5>{pilot.company}</h5>
            </p>
            <p className="card-text">
              <div>{pilot.address}{pilot.address2 ? ", "+pilot.address2 : ""}</div>
              <div>{pilot.city}{", "}{pilot.state}{"  "}{pilot.postalCode}</div>
              <div>P: {pilot.phone}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
