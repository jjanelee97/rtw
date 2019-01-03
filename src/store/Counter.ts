import createReducer from 'utils/store/createReducer';

//#region Action

const IncrementType = '@@COUNTER/INCREMENT';
const DecrementType = '@@COUNTER/DECREMENT';

interface IncrementAction {
  type: typeof IncrementType;
}

interface DecrementAction {
  type: typeof DecrementType;
}

//#endregion

//#region Action Creators

export const actionCreators = {
  increment: () => <IncrementAction>{ type: IncrementType },
  decrement: () => <DecrementAction>{ type: DecrementType }
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
  [IncrementType]: (prevState: State) => ({
    ...prevState,
    count: prevState.count + 1
  }),
  [DecrementType]: (prevState: State) => ({
    ...prevState,
    count: prevState.count - 1
  })
});

//#endregion
