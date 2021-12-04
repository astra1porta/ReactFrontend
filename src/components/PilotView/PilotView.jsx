import React from "react";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-bootstrap";
import { PilotAvatarView } from "../PilotAvatarView/PilotAvatarView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { deletePilot } from "../../redux/features/pilotsSlice";

export const PilotView = ({ avatar, pilot, index }) => {
  const dispatch = useDispatch();
  return (
    <Col>
      <div className="card">
        <Row className="g-0 mt-3">
          <Col className="col-md-4 d-flex flex-column align-items-center">
            <div>
              <PilotAvatarView avatar={avatar} />
            </div>
            <div>
              {pilot.seat} {pilot.fleet}
            </div>
            <div>{pilot.domicile}</div>
            <div>
              <Button
                variant="outline-danger"
                className="mb-3 mt-1"
                onClick={() => dispatch(deletePilot(index))}
              >
                Delete Pilot
              </Button>
            </div>
          </Col>
          <Col className="col-md-8">
            <div className="card-body">
              <div className="card-title bold larger">
                {pilot.firstName} {pilot.lastName}
              </div>
              <div className="card-text">
                <span className="text-secondary">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>{" "}
                {pilot.trainingFacility}
              </div>
              <div className="card-title">
                <h5>{pilot.company}</h5>
              </div>
              <div className="card-text">
                <div>
                  {pilot.address1}
                  {pilot.address2 ? ", " + pilot.address2 : ""}
                </div>
                <div>
                  {pilot.city}
                  {", "}
                  {pilot.state}
                  {"  "}
                  {pilot.postalCode}
                </div>
                <div>
                  P: &#40;{pilot.areaCode}&#41; {pilot.prefix}&#8208;
                  {pilot.suffix}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
PilotView.propTypes = {
  pilots: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    trainingFacility: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.number.isRequired,
    city: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    areaCode: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired,
    fleet: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
    domicile: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
  }),
};
