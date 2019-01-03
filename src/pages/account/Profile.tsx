import React from 'react';
import Helmet from 'react-helmet';

const Profile = () => {
  return (
    <>
      <Helmet
        title={'Profile - Money Tracker'}
        meta={[
          {
            name: 'description',
            content: 'Profile - Money Tracker'
          }
        ]}
      />
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
