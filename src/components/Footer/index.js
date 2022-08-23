import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/grazziano.borgesfagundes/"
              target="_blank"
            >
              <img src="images/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/grazzianobf" target="_blank">
              <img src="images/tw.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/grazzianoborgesfagundes/"
              target="_blank"
            >
              <img src="images/ig.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="images/logo.png" alt="logo" />
      </section>
      <section>
        <p>Desenvolvido por Grazziano</p>
      </section>
    </footer>
  );
}

export default Footer;
