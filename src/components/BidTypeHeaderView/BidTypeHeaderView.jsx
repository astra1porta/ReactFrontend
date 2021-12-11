import React from "react";
//import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import IconColHeaderView from "../IconColHeaderView";

export function BidTypeHeaderView() {
  return (
    <Row className="table-responsive data flrow bg">
      <Col>ID</Col>
      <Col>Bid Types</Col>
      <Col>Status</Col>
      <Col># Bid Periods</Col>
      <Col>Last Import</Col>
      <Col>
        <IconColHeaderView />
      </Col>
    </Row>
  );
}
