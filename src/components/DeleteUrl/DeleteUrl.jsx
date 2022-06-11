import React from 'react';
import PropTypes from 'prop-types';
import { _delete } from '../../common/utils';

function DeleteUrl({ url, onSuccess, onFail }) {
  const handleClick = async () => {
    try {
      await _delete(`${process.env.REACT_APP_API_URLS}?shortUrl=${url}`);
      onSuccess();
    } catch {
      onFail();
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      Delete {url}
    </button>
  );
}

DeleteUrl.propTypes = {
  url: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFail: PropTypes.func.isRequired,
};

export default DeleteUrl;
