import React from "react";
import { NavBarView } from "../../components/NavBarView/NavBarView";
import { JumbtroView} from "../../components/JubtroView/JumbtroView";
import { AirlineView } from "../../components/AirlineView/AirlineView";

export function HomePage({navBarDropDowns, name, version, airlineCards}) {
  return (
    <header>
      <NavBarView navBarDropDowns={navBarDropDowns} />
      <div className="d-flex justify-content-center">
        <JumbtroView name={name} version={version} />
      </div>
      <div >
        {airlineCards.map((airlineCard) => (
          <AirlineView
            key={airlineCard.bidTypesPath}
            airlineCards={airlineCards}
          />
        ))}
      </div>
    </header>
  );
}