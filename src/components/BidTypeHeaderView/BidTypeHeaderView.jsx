import React from "react";
//import PropTypes from "prop-types";
import IconColHeaderView from "../IconColHeaderView";

export function BidTypeHeaderView() {
  return (
    <tbody>
      <tr className="text-center">
        <th scope="col">ID</th>
        <th scope="col">Bid Types</th>
        <th scope="col">Status</th>
        <th scope="col"># Bid Periods</th>
        <th scope="col">Last Import</th>
        <th scope="col">
          <IconColHeaderView />
        </th>
      </tr>
    </tbody>
  );
}
