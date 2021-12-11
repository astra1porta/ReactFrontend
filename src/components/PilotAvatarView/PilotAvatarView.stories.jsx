import React from "react";

import { PilotAvatarView } from "./PilotAvatarView";
import alex from "../../assets/img/alex-johnathan.jpeg";
import janet from "../../assets/img/janet-carton.jpeg";
import john from "../../assets/img/john-smith.jpeg";
import michael from "../../assets/img/michael-zimber.jpeg";
import monica from "../../assets/img/monica-smith.jpeg";
import sandra from "../../assets/img/sandra-smith.jpeg";

export default {
  title: "Components/Avatars/PilotAvatarView",
  component: PilotAvatarView,
};

const avatar = {
  alex: { src: alex, alt: "Alex" },
  janet: { src: janet, alt: "Janet" },
  john: { src: john, alt: "John" },
  michael: { src: michael, alt: "Michael" },
  monica: { src: monica, alt: "Monica" },
  sandra: { src: sandra, alt: "Sandra" },
};
const Template = (args) => <PilotAvatarView {...args} />;
export const Default = Template.bind({});
Default.args = {avatar: avatar.alex};

export const Alex = Template.bind({}); 
Alex.args = {avatar: avatar.alex};
  
export const Janet = Template.bind({});
Janet.args = { avatar: avatar.janet };

export const John = Template.bind({});
John.args = { avatar: avatar.john };

export const Michael = Template.bind({});
Michael.args = { avatar: avatar.michael };

export const Monica = Template.bind({});
Monica.args = { avatar: avatar.monica };

export const Sandra = Template.bind({});
Sandra.args = { avatar: avatar.sandra };



