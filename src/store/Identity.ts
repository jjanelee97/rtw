import createReducer from 'utils/store/createReducer';

//#region Action

const IDENTITY_SIGNUP = '@@IDENTITY/SIGNUP';
const IDENTITY_SIGNIN = '@@IDENTITY/SIGNIN';
const IDENTITY_SIGNOUT = '@@IDENTITY/SIGNOUT';

interface SignupAction {
  type: typeof IDENTITY_SIGNUP;
}

interface SigninAction {
  type: typeof IDENTITY_SIGNIN;
}

interface SignoutAction {
  type: typeof IDENTITY_SIGNOUT;
}

//#endregion

//#region Action Creators

export const actionCreators = {
  signup: () => <SignupAction>{ type: IDENTITY_SIGNUP },
  signin: () => <SigninAction>{ type: IDENTITY_SIGNIN },
  signout: () => <SignoutAction>{ type: IDENTITY_SIGNOUT }
};

//#endregion

//#region State

export interface State {
  isAuthenticated: boolean;
  token: string;
  userName: string;
  displayName: string;
}

const initialState: State = {
  isAuthenticated: false,
  token: '',
  userName: '',
  displayName: ''
};

//#endregion

//#region Reducer

export const reducer = createReducer(initialState, {
  [IDENTITY_SIGNUP]: (prevState: State) => prevState,
  [IDENTITY_SIGNIN]: (prevState: State) => ({
    ...prevState,
    isAuthenticated: true,
    token: 'auvansang',
    userName: 'auvansang',
    displayName: 'Sang Au'
  }),
  [IDENTITY_SIGNOUT]: (prevState: State) => ({
    ...prevState,
    isAuthenticated: false,
    token: '',
    userName: '',
    displayName: ''
  })
});

//#endregion
