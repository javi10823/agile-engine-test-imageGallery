import { handleActions } from 'redux-actions';
import { loginStart, loginSuccess, loginError } from '../../actions/auth';

export interface AuthInitialState {
  logged: boolean;
  loginIsLoading: boolean;
  loginError: string;
}

const AuthInitialState = {
  logged: false,
  loginIsLoading: false,
  loginError: null,
};

export default handleActions(
  {
    [loginStart as any]: state => ({
      ...state,
      loginIsLoading: true,
      loginError: null,
    }),
    [loginSuccess as any]: state => ({
      ...state,
      logged: true,
      loginIsLoading: false,
    }),
    [loginError as any]: (state, action: any) => ({
      ...state,
      loginError: action.error,
      loginIsLoading: false,
    }),
  },
  AuthInitialState,
);
