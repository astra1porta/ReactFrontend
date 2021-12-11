import React from "react";
import PropTypes from "prop-types";
import HeaderView from "../../../components/HeaderView";
import { BidTypeHeaderView } from "../../../components/BidTypeHeaderView/BidTypeHeaderView";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonColView } from "../../../components/ButtonColView/ButtonColView";
import { selectBidTypes } from "../../../redux/features/bidTypeSlice";
import { useSelector } from "react-redux";

export function ASBidTypesPage({ bidTypes, navBarDropDowns }) {
  const storedBidTypes = useSelector(selectBidTypes);
  if (storedBidTypes && storedBidTypes.length > 0) {
    bidTypes = storedBidTypes.filter((bidType) => bidType.airline === "AS");
  }
  return (
    <>
      <HeaderView navBarDropDowns={navBarDropDowns} />

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
              key={bidType.id}
              className={`table-responsive data flrow bg ${bidType.status} ${
                bidType.id % 2 !== 0 ? "bg-gray" : ""
              }`}
            >
              <Col className="d-flex justify-self-start col-1">
                {bidType.id}
              </Col>
              <Col className="d-flex justify-self-start">
                {bidType.fleet} {bidType.seat} {bidType.domicile}
              </Col>
              <Col>{bidType.status}</Col>
              <Col>{bidType.numOfBidPeriods}</Col>
              <Col>{bidType.imported}</Col>
              <Col>
                <ButtonColView status={bidType.status} />
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
      id: PropTypes.string.isRequired,
      fleet: PropTypes.string.isRequired,
      seat: PropTypes.string.isRequired,
      domicile: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
      numOfBidPeriods: PropTypes.number.isRequired,
      imported: PropTypes.string.isRequired,
    })
  ),
};
