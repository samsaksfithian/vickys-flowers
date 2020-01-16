import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkColumn.scss';

const LinkColumn = ({ title, links }) => (
  <section className="link-column">
    <h2 className="link-column-title">{title}</h2>
    {links.map(link_obj => (
      <Link className="link-column-link" to={link_obj.link} key={link_obj.name}>
        {link_obj.name}
      </Link>
    ))}
  </section>
);

LinkColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default LinkColumn;
