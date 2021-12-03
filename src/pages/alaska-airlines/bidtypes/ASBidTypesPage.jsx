import React from "react";
import PropTypes from "prop-types";
import HeaderView from "../../../components/HeaderView";
import { BidTypeHeaderView } from "../../../components/BidTypeHeaderView/BidTypeHeaderView";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonColView } from "../../../components/ButtonColView/ButtonColView";

export function ASBidTypesPage({ bidTypes, navBarDropDowns }) {
  return (
    <>
      <header>
        <HeaderView navBarDropDowns={navBarDropDowns} />
      </header>
      <Container>
        <h1>Alaska Airlines Bid Types</h1>

        <BidTypeHeaderView />

        {Array.isArray(bidTypes) && bidTypes.length === 0 ? (
          <Row>
            <Col colSpan="6">No Bid Types Available </Col>
          </Row>
        ) : (
          bidTypes.map((bidType) => (
            <Row
              key={bidType.Id}
              className={`d-flex align-items-center text-center py-2 ${
                bidType.Id % 2 !== 0 ? "bg-gray" : ""
              }`}
            >
              <Col className="d-flex justify-self-start col-1">
                {bidType.Id}
              </Col>
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
    </>
  );
}
ASBidTypesPage.propTypes = {
  navBarDropDowns: PropTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string.isRequired,
      bidTypesPath: PropTypes.string.isRequired,
      pilotsPath: PropTypes.string.isRequired,
    })
  ),
  bidTypes: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string.isRequired,
      fleet: PropTypes.string.isRequired,
      seat: PropTypes.string.isRequired,
      domicile: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      bidPeriods: PropTypes.number.isRequired,
      imported: PropTypes.string.isRequired,
    })
  ),
};
