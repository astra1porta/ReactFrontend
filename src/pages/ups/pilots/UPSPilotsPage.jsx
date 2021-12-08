import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { HeaderView } from "../../../components/HeaderView/HeaderView";
import { FooterView } from "../../../components/FooterView/FooterView";
import { Container, Row, Col } from "react-bootstrap";
import { PilotView } from "../../../components/PilotView/PilotView";
import AddPilotButtonView from "../../../components/AddPilotButtonView";
import {
  selectPilots,
  updatePilot,
  addPilot,
} from "../../../redux/features/pilotsSlice";

export function UPSPilotsPage({ pilots, navBarDropDowns }) {
  const storedPilots = useSelector(selectPilots);
  if (storedPilots && storedPilots.length > 0) {
    pilots = storedPilots.filter((pilot) => pilot.airline === "UP");
  }
  const dispatch = useDispatch();
  const events = {
    editPilot: (pilot) => dispatch(updatePilot(pilot)),
    addPilot: (pilot) => dispatch(addPilot(pilot)),
  };
  return (
    <>
      <HeaderView navBarDropDowns={navBarDropDowns} />
      <Container>
        <Row>
          <Col>
            <h1>UPS Pilots</h1>
            <p>
              Home / App Views / <span className="bold">Contacts</span>
            </p>
          </Col>
          <Col className="w-100 d-flex justify-content-end align-items-center">
            <AddPilotButtonView airlineLink="/ups/addPilot" />
          </Col>
        </Row>
        <Row sm={1} md={2} lg={3} className="g-2 g-lg-3">
          {pilots.map((pilot, index) => (
            <div key={index}>
              <PilotView
                index={pilot.crewId}
                pilot={pilot}
                avatar={pilot.avatar}
                {...events}
              />
            </div>
          ))}
        </Row>
      </Container>
      <FooterView />
    </>
  );
}

UPSPilotsPage.propTypes = {
  pilots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      airline: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      fleet: PropTypes.string.isRequired,
      seat: PropTypes.string.isRequired,
      domicile: PropTypes.string.isRequired,
      trainingFacility: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      areaCode: PropTypes.string.isRequired,
      prefix: PropTypes.string.isRequired,
      suffix: PropTypes.string.isRequired,
      avatar: PropTypes.object.isRequired,
    })
  ),
  navBarDropDowns: PropTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string.isRequired,
      bidTypesPath: PropTypes.string.isRequired,
      pilotsPath: PropTypes.string.isRequired,
    })
  ),
};
