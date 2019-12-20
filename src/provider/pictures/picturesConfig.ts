import { APIConnector } from '..';
import config from '../../config';

const apiConnector = new APIConnector({ timeout: 50000 });

export default class PictureConfig {
  static get endpoint(): string {
    return `${config.API_URL}`;
  }

  static get auth(): string {
    return `${PictureConfig.endpoint}/auth`;
  }

  static getImages(page: number): string {
    return `${PictureConfig.endpoint}/images?page=${page}`;
  }

  static getImageById(id: string): string {
    return `${PictureConfig.endpoint}/images/${id}`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
