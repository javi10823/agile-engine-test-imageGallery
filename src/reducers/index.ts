import { combineReducers } from 'redux';
import auth, { AuthInitialState } from './auth/auth';
import pictures, { PicturesInitialState } from './pictures';

interface State {
  pictures: PicturesInitialState;
  auth: AuthInitialState;
}

const State = combineReducers({
  pictures,
  auth,
});

export default State;
