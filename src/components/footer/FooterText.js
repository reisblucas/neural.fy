import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/footerText.css';

function FooterText({ classNameFoot }) {
  return (
    <footer className={ classNameFoot }>
      <p
        className="copyright-t"
      >
        &copy; 2022 Spotify AB and neur4l.
      </p>
      <p className="copyright-t">All rights reserved.</p>
    </footer>
  );
}

FooterText.propTypes = {
  classNameFoot: PropTypes.string,
}.isRequired;

export default FooterText;
