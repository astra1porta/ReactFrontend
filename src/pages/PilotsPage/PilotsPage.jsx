import React from "react";
import PropTypes from "prop-types";
import {HeaderView} from "../../components/HeaderView/HeaderView";
import {FooterView} from "../../components/FooterView/FooterView";
import {Container, Row} from 'react-bootstrap';
import {PilotView} from "../../components/PilotView/PilotView";

export function PilotsPage({ pilots, navBarDropDowns }) {
  return (
    <>
      <header>
        <HeaderView navBarDropDowns={navBarDropDowns} />
      </header>
      <Container>
        <Row>
          <h1>Pilots</h1>
          <p>
            Home / App Views / <bold>Contacts</bold>
          </p>
        </Row>
        <Row sm={1} md={2} lg={3} className="g-2 g-lg-3">
          {pilots.map((pilot) => (
            <PilotView pilot={pilot} avatar={pilot.avatar} />
          ))}
        </Row>
      </Container>
      <FooterView />
    </>
  );
}

PilotsPage.propTypes = {
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
    avatar: PropTypes.object.isRequired,
  }),
  navBarDropDowns: PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired,
  }),
};
