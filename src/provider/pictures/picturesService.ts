import PicturesConfig from './picturesConfig';

import AsyncStorage from '@react-native-community/async-storage';

import { USER_TOKEN } from '../../utils/constant';

export default class PictureService {
  static auth() {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = PicturesConfig.auth;
        const response: any = await PicturesConfig.APIConnector.post(endpoint, {
          body: JSON.stringify({
            apiKey: '23567b218376f79d9415',
          }),
        });

        if (response.auth) resolve(response.token);
        else reject(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getAllPictures(page: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = PicturesConfig.getImages(page || 1);
        const token = await AsyncStorage.getItem(USER_TOKEN);
        const response: any = await PicturesConfig.APIConnector.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.__ok)
          resolve({ pictures: response.pictures, page: response.page, hasMore: response.hasMore });
        else reject(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getPictureById(id: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = PicturesConfig.getImageById(id);
        const token = await AsyncStorage.getItem(USER_TOKEN);
        const { __ok, ...detail }: any = await PicturesConfig.APIConnector.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (__ok) resolve(detail);
        else reject(detail);
      } catch (error) {
        reject(error);
      }
    });
  }
}
