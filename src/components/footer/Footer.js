import React from 'react';
import { FOOTER_LINKS } from '../CONSTANTS';
import { LinkColumn } from '..';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    {FOOTER_LINKS.map(footer_chunk => (
      <LinkColumn
        key={footer_chunk.title}
        title={footer_chunk.title}
        links={footer_chunk.links}
      />
    ))}
  </footer>
);

export default Footer;
