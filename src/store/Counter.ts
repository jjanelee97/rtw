import createReducer from 'utils/store/createReducer';

//#region Action

const COUNTER_INCREMENT = '@@COUNTER/INCREMENT';
const COUNTER_DECREMENT = '@@COUNTER/DECREMENT';

interface IncrementAction {
  type: typeof COUNTER_INCREMENT;
}

interface DecrementAction {
  type: typeof COUNTER_DECREMENT;
}

//#endregion

//#region Action Creators

export const actionCreators = {
  increment: () => <IncrementAction>{ type: COUNTER_INCREMENT },
  decrement: () => <DecrementAction>{ type: COUNTER_DECREMENT }
};

//#endregion

//#region State

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

//#endregion

//#region Reducer

export const reducer = createReducer(initialState, {
  [COUNTER_INCREMENT]: (prevState: State) => ({
    ...prevState,
    count: prevState.count + 1
  }),
  [COUNTER_DECREMENT]: (prevState: State) => ({
    ...prevState,
    count: prevState.count - 1
  })
});

//#endregion
