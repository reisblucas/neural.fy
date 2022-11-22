import React from 'react';
import '../../styles/footerText.css';
import DocButton from '../buttons/DocButton';
import GithubButton from '../buttons/GithubButton';
import LinkedinButton from '../buttons/LinkedinButton';

function FooterComplete() {
  return (
    <footer className="copyright-f">
      <div>
        <GithubButton />
        <LinkedinButton />
        <DocButton />
      </div>

      <p
        className="copyright-p"
      >
        &copy; 2022 Spotify AB and reisblucas.
      </p>
      <p className="copyright-p">All rights reserved.</p>
    </footer>
  );
}

export default FooterComplete;
