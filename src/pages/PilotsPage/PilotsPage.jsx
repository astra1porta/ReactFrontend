import React from "react";
import HeaderView from "../../components/HeaderView";
import { PilotsListView } from "../../components/PilotsListView/PilotsListView";


export function PilotsPage({ navBarDropDowns, pilots }) {
  return (
    <header>
      <HeaderView navBarDropDowns={navBarDropDowns} />
      <PilotsListView pilots={pilots} />
    </header>
  );
}