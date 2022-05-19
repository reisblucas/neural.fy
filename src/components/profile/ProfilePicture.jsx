import PropTypes from 'prop-types';
import React from 'react';

function ProfilePicture({ image }) {
  return (
    <div className="divProfilePicture">
      {
        image.length > 1
          ? (
            <img
              src={ image }
              alt="Profile"
              className="profilePicture"
              data-testid="profile-image"
            />
          )
          : (
            <img
              src="https://i.pinimg.com/474x/86/0d/cd/860dcdf5cd536bfd86d8fc86efdbdd18.jpg"
              alt="Profile"
              className="profilePicture"
              data-testid="profile-image"
            />
          )
      }
    </div>
  );
}

ProfilePicture.propTypes = {
  image: PropTypes.string,
}.required;

export default ProfilePicture;
