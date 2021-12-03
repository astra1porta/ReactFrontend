import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { HeaderView } from "../../../components/HeaderView/HeaderView";
import { FooterView } from "../../../components/FooterView/FooterView";
import { Container, Row } from "react-bootstrap";
import { PilotView } from "../../../components/PilotView/PilotView";

export function ASPilotsPage({ pilots, navBarDropDowns }) {
  pilots = useSelector((state) => state.pilots).filter(
    (pilot) => pilot.airline === "AS"
  );
  return (
    <>
      <HeaderView navBarDropDowns={navBarDropDowns} />
      <Container>
        <Row>
          <h1>Alaska Airlines Pilots</h1>
          <p>
            Home / App Views / <span className="bold">Contacts</span>
          </p>
        </Row>
        <Row sm={1} md={2} lg={3} className="g-2 g-lg-3">
          {pilots.map((pilot, ctr) => (
            <div key={ctr}>
              <PilotView pilot={pilot} avatar={pilot.avatar} />
            </div>
          ))}
        </Row>
      </Container>
      <FooterView />
    </>
  );
}

ASPilotsPage.propTypes = {
  pilots: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      trainingFacility: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      areaCode: PropTypes.string.isRequired,
      prefix: PropTypes.string.isRequired,
      sufix: PropTypes.string.isRequired,
      fleet: PropTypes.string.isRequired,
      seat: PropTypes.string.isRequired,
      domicile: PropTypes.string.isRequired,
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
