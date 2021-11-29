import React from "react";

import { PilotView } from "./PilotView";
import alex from "../../assets/img/alex-johnathan.jpeg";
import janet from "../../assets/img/janet-carton.jpeg";
import john from "../../assets/img/john-smith.jpeg";
import michael from "../../assets/img/michael-zimber.jpeg";
import monica from "../../assets/img/monica-smith.jpeg";
import sandra from "../../assets/img/sandra-smith.jpeg";

export default {
  title: "Components/PilotView",
  component: PilotView,
};

const avatar = {
  alex: { src: alex, alt: "Alex" },
  janet: { src: janet, alt: "Janet" },
  john: { src: john, alt: "John" },
  michael: { src: michael, alt: "Michael" },
  monica: { src: monica, alt: "Monica" },
  sandra: { src: sandra, alt: "Sandra" },
};
const pilot = {
  john: {
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
  },
  alex: {
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
  },
  monica: {
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
  },
  michael: {
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
  },
  sandra: {
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
  },
  janet: {
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
  },
};
const Template = (args) => <PilotView {...args} />;
export const Default = Template.bind({});
Default.args = {avatar: avatar.alex, pilot: pilot.alex};




