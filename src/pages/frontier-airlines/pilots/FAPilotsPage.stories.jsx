import React from "react";
import alex from "../../../assets/img/alex-johnathan.jpeg";
import janet from "../../../assets/img/janet-carton.jpeg";
import john from "../../../assets/img/john-smith.jpeg";
import michael from "../../../assets/img/michael-zimber.jpeg";
import monica from "../../../assets/img/monica-smith.jpeg";
import sandra from "../../../assets/img/sandra-smith.jpeg";
import { FAPilotsPage } from "./FAPilotsPage";
import { store } from "../../../redux/store";
import { Provider } from "react-redux";

export default {
  component: FAPilotsPage,
  title: "Pages | Pilots/Frontier Airlines Pilots Page",
};
const avatar = {
  alex: { src: alex, alt: "Alex" },
  janet: { src: janet, alt: "Janet" },
  john: { src: john, alt: "John" },
  michael: { src: michael, alt: "Michael" },
  monica: { src: monica, alt: "Monica" },
  sandra: { src: sandra, alt: "Sandra" },
};
const Template = (args) => (
  <Provider store={store}>
    <FAPilotsPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
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
