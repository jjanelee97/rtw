import * as Identity from './Identity';
import createStore from 'utils/store/createStore';

export default interface AppState {
  identity: Identity.State;
}

const reducers = {
  identity: Identity.reducer
};

export const store = createStore({
  reducers: reducers,
  initialState: undefined
});
