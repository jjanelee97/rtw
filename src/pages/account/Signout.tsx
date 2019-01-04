import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useAppState } from 'utils/store';
import AppState from '../../store';
import { actionCreators } from 'store/Identity';
import { RouteComponentProps } from 'react-router';

type Props = RouteComponentProps;

const Signout = (props: Props) => {
  const [, actions] = useAppState(
    (appState: AppState) => appState.identity,
    actionCreators
  );

  useEffect(() => {
    actions.signout();
    props.history.push('/');
  }, []);

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
