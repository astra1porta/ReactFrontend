import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import BidTypeHeaderView from "../BidTypeHeaderView";
import ButtonColView from "../ButtonColView";

export function BidTypesListView({bidTypes}) {
  return (
    <Container>
      <h1>Bid Types</h1>

      <BidTypeHeaderView />

      {Array.isArray(bidTypes) && bidTypes.length === 0 ? (
        <Row>
          <Col colSpan="6">No Bid Types Available </Col>
        </Row>
      ) : (
        bidTypes.map((bidType) => (
          <Row
            key={bidType.Id}
            className={
              bidType.Id % 2 !== 0
                ? "d-flex align-items-center text-center bg-gray py-2"
                : "d-flex align-items-center text-center py-2"
            }
          >
            <Col className="d-flex justify-self-start col-1">{bidType.Id}</Col>
            <Col className="d-flex justify-self-start">
              {bidType.fleet} {bidType.seat} {bidType.domicile}
            </Col>
            <Col>{bidType.status === 1 ? "CURRENT" : "IMPORTING"}</Col>
            <Col>{bidType.bidPeriods}</Col>
            <Col>{bidType.imported}</Col>
            <Col>
              <ButtonColView />
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
}

BidTypesListView.propTypes = {
  
  bidTypes: PropTypes.shape({
    Id: PropTypes.string.isRequired,
    fleet: PropTypes.string.isRequired,
    seet: PropTypes.string.isRequired,
    domicile: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    bidPeriods: PropTypes.number.isRequired,
    imported: PropTypes.string.isRequired,
  }),
};
