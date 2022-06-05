import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

import './UrlsList.scss';

function UrlsList({ urls }) {
  const urlItem = (item) => {
    const { text = 'url', url } = item;
    return (
      <li className="urls-list__item" key={item.url}>
        <FontAwesomeIcon className='urls-list__icon' icon={faCopy} />
        {text}:{' '}
        <a href={url} title={text}>
          {url}
        </a>
      </li>
    );
  };

  return <ul className="urls-list">{urls.map((item) => urlItem(item))}</ul>;
}

UrlsList.propTypes = {
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default UrlsList;
