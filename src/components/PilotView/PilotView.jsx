import React from "react";
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import {PilotAvatarView} from "../PilotAvatarView/PilotAvatarView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export const PilotView = ({avatar, pilot}) => {
  return (
    <Col>
    <div className="card">
      <Row className="g-0 mt-3">
        <Col className="col-md-4 d-flex flex-column align-items-center">
          <div>
          <PilotAvatarView avatar={avatar} />
          </div>
          <div>
            {pilot.seat}{" "}{pilot.fleet}
          </div>
          <div>{pilot.domicile}</div>
        </Col>
        <Col className="col-md-8">
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
        </Col>
      </Row>
    </div>
    </Col>
  );
};
PilotView.propTypes = {
  pilots: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    address2: PropTypes.number.isRequired,
    city: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    fleet: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
    domicile: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired
  }),
};
