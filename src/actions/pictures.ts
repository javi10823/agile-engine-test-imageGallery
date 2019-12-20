import { createAction } from 'redux-actions';
import PictureService from '../provider/pictures/picturesService';

import {
  GET_ALL_PICTURES,
  GET_ALL_PICTURES_SUCCESS,
  GET_ALL_PICTURES_ERROR,
  GET_PICTURE,
  GET_PICTURE_SUCCESS,
  GET_PICTURE_ERROR,
} from './types';

export const getAllPicturesStart = createAction(GET_ALL_PICTURES);
export const getAllPicturesSuccess = createAction(GET_ALL_PICTURES_SUCCESS, data => data);
export const getAllPicturesError = createAction(GET_ALL_PICTURES_ERROR, error => error);

export const getPictureDetailStart = createAction(GET_PICTURE);
export const getPictureDetailSuccess = createAction(GET_PICTURE_SUCCESS, data => data);
export const getPictureDetailError = createAction(GET_PICTURE_ERROR, error => error);

export function getAllPictures(page: number) {
  return async dispatch => {
    try {
      dispatch(getAllPicturesStart());

      const response: any = await PictureService.getAllPictures(page);

      dispatch(getAllPicturesSuccess(response));
    } catch (err) {
      dispatch(getAllPicturesError(err));
    }
  };
}

export function getPictureDetail(id: string) {
  return async dispatch => {
    try {
      dispatch(getPictureDetailStart());

      const response: any = await PictureService.getPictureById(id);

      dispatch(getPictureDetailSuccess(response));
    } catch (err) {
      dispatch(getPictureDetailError(err));
    }
  };
}
