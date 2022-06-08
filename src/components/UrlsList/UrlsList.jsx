import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './UrlsList.scss';

function UrlsList({ urls }) {
  const [copiedUrl, setCopiedUrl] = useState();

  const handleCopyClick = async (textToCopy) => {
    await navigator.clipboard.writeText(textToCopy);
    setCopiedUrl(textToCopy);
    setTimeout(() => {
      setCopiedUrl(null);
    }, 1500);
  };

  const urlItem = (item) => {
    const { text = 'url', url } = item;
    return (
      <li className="urls-list__item" key={item.url}>
        <FontAwesomeIcon
          onClick={() => handleCopyClick(item.url)}
          className="urls-list__icon"
          icon={item.url === copiedUrl ? faCheck : faCopy}
        />
        {text}:{' '}
        <a href={url} title={text} target="_blank" rel="noreferrer">
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
