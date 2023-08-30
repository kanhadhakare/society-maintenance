import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'society-management',
  webDir: 'dist/society-management',
  server: {
    androidScheme: 'https'
  }
};

export default config;
