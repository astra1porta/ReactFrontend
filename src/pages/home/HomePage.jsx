import React from "react";
import { CardGroup, Row, Container, Col } from "react-bootstrap";
import HeaderView from "../../components/HeaderView";
import { JumbtroView} from "../../components/JubtroView/JumbtroView";
import { AirlineView } from "../../components/AirlineView/AirlineView";
import {FooterView} from "../../components/FooterView/FooterView";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../global.css";

export function HomePage({navBarDropDowns, name, version}) {
  return (
    <>
    <header>
      
      <HeaderView navBarDropDowns={navBarDropDowns} />
      
    </header>
    <Container>
      <div className="d-flex justify-content-center">
        <JumbtroView name={name} version={version} />
      </div>
    </Container>
      <Container>
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