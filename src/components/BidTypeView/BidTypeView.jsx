import React from "react";
//import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

export function BidTypeView({
  bidType: { status, Id, seat, domicile, fleet, numOfBidPeriods, imported },
}) {
  return (
    <Row fluid className={`table-responsive data flrow bg ${status}`}>
      <Col>{Id}</Col>
      <Col>
        {seat}
        {domicile}
        {fleet}
      </Col>
      <Col>{status}</Col>
      <Col>{numOfBidPeriods}</Col>
      <Col>{imported}</Col>
      <Col>
        <button className={`btn btn-primary w-100 import-btn ${status}`}>
          Import
        </button>
        <button className={`btn btn-danger w-100 mt-1 delete-btn ${status}`}>
          Delete
        </button>
        <button className={`btn btn-danger w-100 cancel-btn ${status}`}>
          Cancel
        </button>
      </Col>
    </Row>
  );
}
