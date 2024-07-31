import {SENTRY_DSN} from './src/env';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: SENTRY_DSN,

  /**
   * @see https://spotlightjs.com
   */
  enableSpotlight: __DEV__,
});

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
