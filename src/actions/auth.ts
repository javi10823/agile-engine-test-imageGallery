import { createAction } from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from './types';
import { USER_TOKEN } from '../utils/constant';

import PictureService from '../provider/pictures/picturesService';

export const loginStart = createAction(LOGIN_START);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginError = createAction(LOGIN_ERROR, error => error);

export function logIn() {
  return async dispatch => {
    try {
      dispatch(loginStart());
      const token: any = await PictureService.auth();
      await AsyncStorage.setItem(USER_TOKEN, token);

      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginError(err));
    }
  };
}
