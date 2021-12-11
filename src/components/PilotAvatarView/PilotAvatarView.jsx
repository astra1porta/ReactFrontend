import React from "react";
import PropTypes from 'prop-types';


export const PilotAvatarView = ({ avatar}) => {
  return (
    <img
      className="rounded-circle"
      src={avatar.src}
      alt={avatar.alt}
    />
  );
};
PilotAvatarView.propTypes = {
  avatar: PropTypes.object.isRequired,
};
