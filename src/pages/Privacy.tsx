import React from 'react';
import Helmet from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet
        title={'Privacy - React with Typescript and Webpack'}
        meta={[
          {
            name: 'description',
            content: 'Privacy - React with Typescript and Webpack'
          }
        ]}
      />
      <h1>Privacy Page</h1>
    </>
  );
};

export default Privacy;
