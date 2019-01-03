import React from 'react';
import Helmet from 'react-helmet';

const Dashboard = () => {
  return (
    <>
      <Helmet
        title={'Dashboard - React with Typescript and Webpack'}
        meta={[
          {
            name: 'description',
            content: 'Dashboard - React with Typescript and Webpack'
          }
        ]}
      />
      <h1>Dashboard Page</h1>
    </>
  );
};

export default Dashboard;
