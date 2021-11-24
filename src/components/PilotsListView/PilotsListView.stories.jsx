import React from "react";
import alex from "../../assets/img/alex-johnathan.jpeg";
import janet from "../../assets/img/janet-carton.jpeg";
import john from "../../assets/img/john-smith.jpeg";
import michael from "../../assets/img/michael-zimber.jpeg";
import monica from "../../assets/img/monica-smith.jpeg";
import sandra from "../../assets/img/sandra-smith.jpeg";
import { PilotsListView } from "./PilotsListView";
import * as DropDownStories from "../NavBarDropDownView/NavBarDropDownView.stories";

export default {
  title: "Components/Pilots List",
  component: PilotsListView,
};

const Template = (args) => <PilotsListView {...args} />;
const avatar = {
   alex: { src: alex, alt: "Alex" },
    janet: { src: janet, alt: "Janet" },
    john: { src: john, alt: "John" },
    michael: { src: michael, alt: "Michael" },
    monica: { src: monica, alt: "Monica" },
    sandra: { src: sandra, alt: "Sandra" },
  };

export const Default = Template.bind({});
Default.args = {
  bidTypes: [],
  pilots: []
};
//Test on load Behaviour
export const Loaded = Template.bind({});

Loaded.args = {
  pilots: [
    {
      name: "John Smith",
      location: "Riviera State 32/106",
      company: "Twitter, Inc.",
      address: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phone: "(123) 456-7890",
      fleet: "737",
      seat: "CPT",
      domicile: "GEG",
      avatar: avatar.john,
    },
    {
      name: "Alex Johnathan",
      location: "Riviera State 32/106",
      company: "Twitter, Inc.",
      address: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phone: "(123) 456-7890",
      fleet: "737",
      seat: "CPT",
      domicile: "GEG",
      avatar: avatar.alex,
    },
    {
      name: "Monica Smith",
      location: "Riviera State 32/106",
      company: "Twitter, Inc.",
      address: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phone: "(123) 456-7890",
      fleet: "737",
      seat: "CPT",
      domicile: "GEG",
      avatar: avatar.monica,
    },
    {
      name: "Michael Zimber",
      location: "Riviera State 32/106",
      company: "Twitter, Inc.",
      address: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phone: "(123) 456-7890",
      fleet: "737",
      seat: "CPT",
      domicile: "GEG",
      avatar: avatar.michael,
    },
    {
      name: "Sandra Smith",
      location: "Riviera State 32/106",
      company: "Twitter, Inc.",
      address: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phone: "(123) 456-7890",
      fleet: "737",
      seat: "CPT",
      domicile: "GEG",
      avatar: avatar.sandra,
    },
    {
      name: "Janet Carton",
      location: "Riviera State 32/106",
      company: "Twitter, Inc.",
      address: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phone: "(123) 456-7890",
      fleet: "737",
      seat: "FO",
      domicile: "GEG",
      avatar: avatar.janet,
    },
  ],
  bidTypes: [
    {
      Id: "1",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "ANC",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "2",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "LAX",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "3",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "PDX",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "4",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "SEA",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "5",
      fleet: "73G",
      seat: "FIRST OFFICER",
      domicile: "ANC",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "6",
      fleet: "73G",
      seat: "FIRST OFFICER",
      domicile: "LAX",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
  ],
  navBarDropDowns: [
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "American Airlines",
      bidTypesPath: "american-airlines/bidTypes",
      pilotsPath: "american-airlines/pilots",
    },
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "Alaska Airlines",
      bidTypesPath: "alaska-airlines/bidTypes",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "Frontier Airlines",
      bidTypesPath: "frontier-airlines/bidTypes",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "UPS",
      bidTypesPath: "UPS/bidTypes",
      pilotsPath: "UPS/pilots",
    },
  ],
};
