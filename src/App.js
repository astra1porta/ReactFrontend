import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import alex from "./assets/img/alex-johnathan.jpeg";
import janet from "./assets/img/janet-carton.jpeg";
import john from "./assets/img/john-smith.jpeg";
import michael from "./assets/img/michael-zimber.jpeg";
import monica from "./assets/img/monica-smith.jpeg";
import sandra from "./assets/img/sandra-smith.jpeg";
import HomePage from "./pages/home";
import AABidTypesPage from "./pages/american-airlines/bidtypes";
import AAPilotsPage from "./pages/american-airlines/pilots";
import ASBidTypesPage from "./pages/alaska-airlines/bidtypes";
import ASPilotsPage from "./pages/alaska-airlines/pilots";
import FABidTypesPage from "./pages/frontier-airlines/bidtypes";
import FAPilotsPage from "./pages/frontier-airlines/pilots";
import UPSBidTypesPage from "./pages/ups/bidtypes";
import UPSPilotsPage from "./pages/ups/pilots";
import NotFoundPage from "./pages/NotFoundPage";
import AddPilot from "./pages/AddPilotPage";
import EditPilot from "./pages/EditPilotPage";

import "./App.css";

function App() {
  const avatar = {
    alex: { src: alex, alt: "Alex" },
    janet: { src: janet, alt: "Janet" },
    john: { src: john, alt: "John" },
    michael: { src: michael, alt: "Michael" },
    monica: { src: monica, alt: "Monica" },
    sandra: { src: sandra, alt: "Sandra" },
  };
  const db = {
    firstName: "Bill Smith",
    version: "1.0.0",
    pilots: [
      {
        firstName: "John",
        lastName: "Smith",
        trainingFacility: "Riviera State 32/106",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        avatar: avatar.john,
      },
      {
        firstName: "Alex",
        lastName: "Johnathan",
        trainingFacility: "Riviera State 32/106",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        avatar: avatar.alex,
      },
      {
        firstName: "Monica",
        lastName: "Smith",
        trainingFacility: "Riviera State 32/106",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        avatar: avatar.monica,
      },
      {
        firstName: "Michael",
        lastName: "Zimber",
        trainingFacility: "Riviera State 32/106",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        avatar: avatar.michael,
      },
      {
        firstName: "Sandra",
        lastName: "Smith",
        trainingFacility: "Riviera State 32/106",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
        fleet: "737",
        seat: "CPT",
        domicile: "GEG",
        avatar: avatar.sandra,
      },
      {
        firstName: "Janet",
        lastName: "Carton",
        trainingFacility: "Riviera State 32/106",
        company: "Twitter, Inc.",
        address1: "795 Folsom Ave",
        address2: "Suite 600",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        areaCode: "123",
        prefix: "456",
        suffix: "7890",
        fleet: "737",
        seat: "FO",
        domicile: "GEG",
        avatar: avatar.janet,
      },
    ],
    bidTypes: [
      {
        id: "1",
        fleet: "73G",
        seat: "CAPTAIN",
        domicile: "ANC",
        status: 1,
        numOfBidPeriods: 1,
        imported: "Nov 1 2017 12:00AM",
      },
      {
        id: "2",
        fleet: "73G",
        seat: "CAPTAIN",
        domicile: "LAX",
        status: 1,
        numOfBidPeriods: 1,
        imported: "Nov 1 2017 12:00AM",
      },
      {
        id: "3",
        fleet: "73G",
        seat: "CAPTAIN",
        domicile: "PDX",
        status: 1,
        numOfBidPeriods: 1,
        imported: "Nov 1 2017 12:00AM",
      },
      {
        id: "4",
        fleet: "73G",
        seat: "CAPTAIN",
        domicile: "SEA",
        status: 1,
        numOfBidPeriods: 1,
        imported: "Nov 1 2017 12:00AM",
      },
      {
        id: "5",
        fleet: "73G",
        seat: "FIRST OFFICER",
        domicile: "ANC",
        status: 1,
        numOfBidPeriods: 1,
        imported: "Nov 1 2017 12:00AM",
      },
      {
        id: "6",
        fleet: "73G",
        seat: "FIRST OFFICER",
        domicile: "LAX",
        status: 1,
        numOfBidPeriods: 1,
        imported: "Nov 1 2017 12:00AM",
      },
    ],
    navBarDropDowns: [
      {
        airlineName: "American Airlines",
        bidTypesPath: "/american-airlines/bidTypes",
        pilotsPath: "/american-airlines/pilots",
      },
      {
        airlineName: "Alaska Airlines",
        bidTypesPath: "/alaska-airlines/bidTypes",
        pilotsPath: "/alaska-airlines/pilots",
      },
      {
        airlineName: "Frontier Airlines",
        bidTypesPath: "/frontier-airlines/bidTypes",
        pilotsPath: "/frontier-airlines/pilots",
      },
      {
        airlineName: "UPS",
        bidTypesPath: "/UPS/bidTypes",
        pilotsPath: "/UPS/pilots",
      },
    ],
  };

  return (
    <Router>
      <Routes>
        <Route
          path=""
          element={
            <HomePage
              navBarDropDowns={db.navBarDropDowns}
              name={db.name}
              version={db.version}
            />
          }
        />
        <Route path="editPilot/:pilotId" element={<EditPilot />} />
        <Route path="american-airlines">
          <Route
            path="bidTypes"
            element={
              <AABidTypesPage
                navBarDropDowns={db.navBarDropDowns}
                bidTypes={db.bidTypes}
              />
            }
          />
          <Route
            path="pilots"
            element={
              <AAPilotsPage
                navBarDropDowns={db.navBarDropDowns}
                pilots={db.pilots}
              />
            }
          />
          <Route path="addPilot" element={<AddPilot airline="AA" />} />
        </Route>
        <Route path="alaska-airlines">
          <Route
            path="bidTypes"
            element={
              <ASBidTypesPage
                navBarDropDowns={db.navBarDropDowns}
                bidTypes={db.bidTypes}
              />
            }
          />
          <Route
            path="pilots"
            element={
              <ASPilotsPage
                navBarDropDowns={db.navBarDropDowns}
                pilots={db.pilots}
              />
            }
          />
          <Route path="addPilot" element={<AddPilot airline="AS" />} />
        </Route>
        <Route path="frontier-airlines">
          <Route
            path="bidTypes"
            element={
              <FABidTypesPage
                navBarDropDowns={db.navBarDropDowns}
                bidTypes={db.bidTypes}
              />
            }
          />
          <Route
            path="pilots"
            element={
              <FAPilotsPage
                navBarDropDowns={db.navBarDropDowns}
                pilots={db.pilots}
              />
            }
          />
          <Route path="addPilot" element={<AddPilot airline="FA" />} />
        </Route>
        <Route path="UPS">
          <Route
            path="bidTypes"
            element={
              <UPSBidTypesPage
                navBarDropDowns={db.navBarDropDowns}
                bidTypes={db.bidTypes}
              />
            }
          />
          <Route
            path="pilots"
            element={
              <UPSPilotsPage
                navBarDropDowns={db.navBarDropDowns}
                pilots={db.pilots}
              />
            }
          />
          <Route path="addPilot" element={<AddPilot airline="UP" />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
