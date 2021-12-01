import React from "react";
import PropTypes from "prop-types";
import { HeaderView } from "../../components/HeaderView/HeaderView";
import { FooterView } from "../../components/FooterView/FooterView";
import { Container, Row } from "react-bootstrap";
import { PilotView } from "../../components/PilotView/PilotView";

export function PilotsPage({ pilots, navBarDropDowns }) {
  return (
    <>
      <HeaderView navBarDropDowns={navBarDropDowns} />
      <Container>
        <Row>
          <h1>Pilots</h1>
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

PilotsPage.propTypes = {
  pilots: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    fleet: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
    domicile: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
  })),
  navBarDropDowns: PropTypes.arrayOf(PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired,
  })),
};
