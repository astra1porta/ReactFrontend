import React from "react";
//import PropTypes from "prop-types";
import { Container, Table } from "react-bootstrap";
import BidTypeHeaderView from "../BidTypeHeaderView";
import BidTypeView from "../BidTypeView";

export function BidTypesListView({bidTypes}) {
  return (
    <Container>
      <h1>Bid Types</h1>
      <Table striped hover className="align-middle">
        <BidTypeHeaderView />
        <BidTypeView bidTypes={bidTypes} />
      </Table>
    </Container>
  );
}
