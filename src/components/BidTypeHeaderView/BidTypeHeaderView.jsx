import React from "react";
//import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";
import IconColHeaderView from "../IconColHeaderView";

export function BidTypeHeaderView() {
  return (
    <Row className="text-center">
      <Col className="d-flex justify-self-start col-1">ID</Col>
      <Col className="d-flex justify-self-start">Bid Types</Col>
      <Col>Status</Col>
      <Col># Bid Periods</Col>
      <Col>Last Import</Col>
      <Col>
        <IconColHeaderView />
      </Col>
    </Row>
  );
}
