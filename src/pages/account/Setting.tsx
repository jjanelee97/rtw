import React from 'react';
import Helmet from 'react-helmet';

const Setting = () => {
  return (
    <>
      <Helmet
        title={'Setting - React with Typescript and Webpack'}
        meta={[
          {
            name: 'description',
            content: 'Setting - React with Typescript and Webpack'
          }
        ]}
      />
      <h1>Setting Page</h1>
    </>
  );
};

export default Setting;
