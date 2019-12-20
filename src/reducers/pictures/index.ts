import { handleActions } from 'redux-actions';
import {
  getAllPicturesStart,
  getAllPicturesSuccess,
  getAllPicturesError,
  getPictureDetailStart,
  getPictureDetailSuccess,
  getPictureDetailError,
} from '../../actions/pictures';

export interface PicturesInitialState {
  AllPicturesLoading: boolean;
  AllPicturesData: object;
  AllPicturesError: string | boolean;
  detailLoading: boolean;
  detailData: object;
  detailError: string | boolean;
}

const PicturesInitialState = {
  AllPicturesLoading: false,
  AllPicturesData: { pictures: [], page: 1, hasMore: false },
  AllPicturesError: false,
  detailLoading: false,
  detailData: {},
  detailError: false,
};

export default handleActions(
  {
    [getAllPicturesStart as any]: state => ({
      ...state,
      AllPicturesLoading: true,
      AllPicturesError: false,
    }),
    [getAllPicturesSuccess as any]: (state, action: any) => ({
      ...state,
      AllPicturesLoading: false,
      AllPicturesData: {
        ...action.payload,
        pictures: [...state.AllPicturesData.pictures, ...action.payload.pictures],
      },
      AllPicturesError: false,
    }),
    [getAllPicturesError as any]: (state, action: any) => ({
      ...state,
      AllPicturesError: action.error,
      AllPicturesLoading: false,
    }),
    [getPictureDetailStart as any]: state => ({
      ...state,
      detailLoading: true,
      detailData: {},
      AllPicturesError: false,
    }),
    [getPictureDetailSuccess as any]: (state, action: any) => ({
      ...state,
      detailLoading: false,
      detailData: action.payload,
      AllPicturesError: false,
    }),
    [getPictureDetailError as any]: (state, action: any) => ({
      ...state,
      detailLoading: false,
      detailData: {},
      detailError: action.error,
    }),
  },
  PicturesInitialState,
);
