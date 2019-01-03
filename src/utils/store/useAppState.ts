import { useContext, useMemo } from 'react';
import { RootContext, AppContext } from './AppContext';

const useAppState = <AS, S, A extends { [key: string]: any }>(
  selector: (appState: AS) => S,
  actionCreators: A
): [S, A] => {
  const [bits, dispatch] = useContext(RootContext);
  const observedBits = Number(selector(bits));
  const appState = useContext(AppContext, observedBits);
  const state = selector(appState);

  const actions = useMemo(
    () => {
      const retActions = {} as A;

      Object.keys(actionCreators).forEach(key => {
        retActions[key] = (...args: any[]) => {
          const action = actionCreators[key](...args);

          if (typeof action === 'function') {
            action(dispatch, appState);
          }

          dispatch(action);
        };
      });

      return retActions;
    },
    [actionCreators]
  );

  return [state, actions];
};

export default useAppState;
