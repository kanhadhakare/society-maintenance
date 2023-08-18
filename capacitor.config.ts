import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'socity-management',
  webDir: 'dist/socity-management',
  server: {
    androidScheme: 'https'
  }
};

export default config;
