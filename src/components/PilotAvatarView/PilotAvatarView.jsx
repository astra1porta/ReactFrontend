import React from "react";


export const PilotAvatarView = ({ avatar}) => {
  return (
    <img
      className="rounded-circle"
      src={avatar.src}
      alt={avatar.alt}
    />
  );
};
