import React from 'react';
import { UrlForm, UrlsList } from '../../components';

function FrontPage() {
  const urls = [{ text: 'text', url: '/abc' }, { url: '/fgf' }];
  return (
    <>
      <UrlForm />
      Result URLs:
      <UrlsList urls={urls} />
    </>
  );
}

export default FrontPage;
