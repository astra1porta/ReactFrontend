import React from "react";
import PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";
import PilotView from "../PilotView";


export function PilotsListView({pilots}) {
  return (
    <Container>
      <Row>
        <h1>Pilots</h1>
        <p>Home / App Views / <bold>Contacts</bold></p>
      </Row>
      <Row
        sm={1}
        md={2}
        lg={3}
        className="g-2 g-lg-3"
      >
        {pilots.map((pilot) => (
          <PilotView pilot={pilot} avatar={pilot.avatar} />
        ))}
      </Row>
    </Container>
  );
  
}

PilotsListView.propTypes = {
  pilots: PropTypes.object.isRequired
};
