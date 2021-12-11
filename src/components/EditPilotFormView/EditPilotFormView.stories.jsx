import React from "react";
import alex from "../../assets/img/alex-johnathan.jpeg";
import janet from "../../assets/img/janet-carton.jpeg";
import john from "../../assets/img/john-smith.jpeg";
import michael from "../../assets/img/michael-zimber.jpeg";
import monica from "../../assets/img/monica-smith.jpeg";
import sandra from "../../assets/img/sandra-smith.jpeg";
import { action } from "@storybook/addon-actions";
import { EditPilotFormView } from "./EditPilotFormView";
import { Provider } from "react-redux";

export default {
  title: "Interactive Components/EditPilotFormView",
  component: EditPilotFormView,
};
const avatar = {
  alex: { src: alex, alt: "Alex" },
  janet: { src: janet, alt: "Janet" },
  john: { src: john, alt: "John" },
  michael: { src: michael, alt: "Michael" },
  monica: { src: monica, alt: "Monica" },
  sandra: { src: sandra, alt: "Sandra" },
};
//Mock redux store
const store = {
  getState: () => {
    return {
      pilots: [
        {
          crewId: 1,
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
          crewId: 2,
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
          crewId: 3,
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
          crewId: 4,
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
          crewId: 5,
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
          crewId: 6,
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
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};
const Template = (args) => (
  <Provider store={store}>
    <EditPilotFormView {...args} />
  </Provider>
);
export const Default = Template.bind({});
