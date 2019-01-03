import React from 'react';
import Helmet from 'react-helmet';

const Signout = () => {
  return (
    <>
      <Helmet
        title={'Signout - React with Typescript and Webpack'}
        meta={[
          {
            name: 'description',
            content: 'Signout - React with Typescript and Webpack'
          }
        ]}
      />
      <h1>Signout Page</h1>
    </>
  );
};

export default Signout;
