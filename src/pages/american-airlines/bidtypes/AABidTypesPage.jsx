import React from "react";
import PropTypes from "prop-types";
import HeaderView from "../../../components/HeaderView";
import { BidTypeHeaderView } from "../../../components/BidTypeHeaderView/BidTypeHeaderView";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonColView } from "../../../components/ButtonColView/ButtonColView";

import {selectBidTypes} from "../../../redux/features/bidTypeSlice";
import { useSelector } from "react-redux";

export function AABidTypesPage({ bidTypes, navBarDropDowns }) {
  const storedBidTypes = useSelector(selectBidTypes);
  if(storedBidTypes && storedBidTypes.length > 0){
    bidTypes = storedBidTypes.filter((bidType) => bidType.airline === "AA");
  }
  return (
    <>
      <header>
        <HeaderView navBarDropDowns={navBarDropDowns} />
      </header>
      <Container>
        <h1>American Airlines Bid Types</h1>

        <BidTypeHeaderView />

        {Array.isArray(bidTypes) && bidTypes.length === 0 ? (
          <Row>
            <Col colSpan="6">No Bid Types Available </Col>
          </Row>
        ) : (
          bidTypes.map((bidType) => (
            <Row
              key={bidType.Id}
              className={`table-responsive data flrow bg ${bidType.status} ${
                bidType.Id % 2 !== 0 ? "bg-gray" : ""
              }`}
            >
              <Col>
                {bidType.Id}
              </Col>
              <Col>
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
AABidTypesPage.propTypes = {
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
      numOfBidPeriods: PropTypes.number.isRequired,
      imported: PropTypes.string.isRequired,
    })
  ),
};
