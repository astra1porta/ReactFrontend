import React from "react";
import PropTypes from "prop-types";
import ButtonColView from "../ButtonColView";

export function BidTypeView({bidTypes}) {
   
  if(Array.isArray(bidTypes) && bidTypes.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="6">No Bid Types Available </td>
        </tr>
      </tbody>
    );
  }
    return (
      <tbody className="text-center">
        {bidTypes.map((bidType) => (
          <tr key={bidType.Id}>
            <td>{bidType.Id}</td>
            <td>
              {bidType.fleet}{" "}
              {bidType.seat}{" "}
              {bidType.domicile}
            </td>
            <td>{bidType.status === 1 ? "CURRENT" : "IMPORTING"}</td>
            <td>{bidType.bidPeriods}</td>
            <td>{bidType.imported}</td>
            <td>
              <ButtonColView />
            </td>
          </tr>
        ))}
      </tbody>
    );

};
BidTypeView.propTypes = {
  bidTypes: PropTypes.array.isRequired,
};
