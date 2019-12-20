import {
  STAGING_API_URL,
  REDUX_LOGGER_ACTIVATED,
  API_CONNECTOR_LOGS_ACTIVATED,
} from 'react-native-dotenv';

export const isProduction = false;

console.table(
  [
    {
      id: 'IS_PRODUCTION_MODE',
      value: isProduction,
    },
    {
      id: 'REDUX_LOGGER_ACTIVATED',
      value: REDUX_LOGGER_ACTIVATED,
    },
    {
      id: 'API_CONNECTOR_LOGS_ACTIVATED',
      value: API_CONNECTOR_LOGS_ACTIVATED,
    },
  ].reduce((acc, { id, ...x }) => {
    acc[id] = x;
    return acc;
  }, {}), // this remove the first column of indexs
);

interface Config {
  isDev: boolean;
  API_URL: string;
  SENTRY_DSN: string;
  REDUX_LOGGER_ACTIVATED: boolean;
}

const Config = {
  isDev: __DEV__,
  API_URL: STAGING_API_URL,
  REDUX_LOGGER_ACTIVATED: REDUX_LOGGER_ACTIVATED === 'true',
  API_CONNECTOR_LOGS_ACTIVATED: API_CONNECTOR_LOGS_ACTIVATED === 'true',
};

export default Config;
