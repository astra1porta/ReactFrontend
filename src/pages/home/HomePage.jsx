import React from "react";
import { CardGroup, Row, Container, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import HeaderView from "../../components/HeaderView";
import { JumbtroView} from "../../components/JubtroView/JumbtroView";
import { AirlineView } from "../../components/AirlineView/AirlineView";
import {FooterView} from "../../components/FooterView/FooterView";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../global.css";

export function HomePage({name, version, navBarDropDowns}) {
  return (
    <>
    <header>
      
      <HeaderView navBarDropDowns={navBarDropDowns} />
      
    </header>
    <Container>
      <div className="d-flex justify-content-center">
        <JumbtroView name={name} version={version} />
      </div>
    
        <CardGroup>
          <Row xs={1} md={2} className="g-2">
            {navBarDropDowns.map((airlineCard) => (
              <Col>
                <AirlineView
                  bidTypesPath={airlineCard.bidTypesPath}
                  airlineName={airlineCard.airlineName}
                  />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    <FooterView />
    </>
  );
}
HomePage.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  navBarDropDowns: PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired,
  })
  
};