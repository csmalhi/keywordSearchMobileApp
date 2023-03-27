import 'dotenv/config';

export default {
  "expo": {
    "owner": "cmalhi",
    "slug": "keywordsearchmobileapp",
    "name": "keywordSearchMobileApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "@react-native-voice/voice",
        {
          "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone",
          "speechRecogntionPermission": "Allow $(PRODUCT_NAME) to securely recognize user speech"
        }
      ]
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.anonymous.keywordsearchmobileapp",
      "infoPlist": {
        "NSSpeechRecognitionUsageDescription": "This app uses speech recognition to convert your speech to text.",
        "NSCameraUsageDescription": "This app uses the camera to let user put a photo in his profile page."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "permissions": ["android.permission.RECORD_AUDIO"],
      "package": "com.anonymous.keywordsearchmobileapp"
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      "eas": {
        "projectId": "cf6ae4a6-6826-45d8-a146-90e7c005f18e"
      }
    }
  }
}
