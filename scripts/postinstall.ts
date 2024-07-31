import 'dotenv/config';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
const {SENTRY_AUTH_TOKEN, SENTRY_DSN, SENTRY_ORG, SENTRY_PROJECT, SENTRY_URL} =
  process.env;

// Write environment variables to files
console.log('Writing environment variables to files...');

console.log('Writing to android/sentry.properties...');
fs.writeFileSync(
  path.join(__dirname, '../android/sentry.properties'),
  [
    `auth.token=${SENTRY_AUTH_TOKEN}`,
    `defaults.org=${SENTRY_ORG}`,
    `defaults.project=${SENTRY_PROJECT}`,
    `defaults.url=${SENTRY_URL}`,
  ].join('\n') + '\n',
  'utf-8',
);

console.log('Writing to ios/sentry.properties...');
fs.writeFileSync(
  path.join(__dirname, '../ios/sentry.properties'),
  [
    `auth.token=${SENTRY_AUTH_TOKEN}`,
    `defaults.org=${SENTRY_ORG}`,
    `defaults.project=${SENTRY_PROJECT}`,
    `defaults.url=${SENTRY_URL}`,
  ].join('\n') + '\n',
  'utf-8',
);

console.log('Writing to src/env.ts...');
fs.writeFileSync(
  path.join(__dirname, '../src/env.ts'),
  `export const SENTRY_DSN = ${JSON.stringify(SENTRY_DSN)};\n`,
  'utf-8',
);

console.log('Done!');
