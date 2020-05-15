# The Forgotten Giants - app
This app is centered around the The Forgotten Giants and will provide you with a map to find the giants and information about transport. If you are within a distance of 10 meters of the giant, a reward screen will be triggered. It is then possible to read about or listen to the giant. Moreover, you can keep track of all the rewards that you have once gathered.

## Installation
The app was generated using [Expo](https://expo.io/learn). To set up the Expo environment and libraries that allows you to run the code on a simulator, do as follows:

Download [NodeJS](https://nodejs.org/en/) - the latest version

Expo
```bash
yarn add global expo-cli
```

Navigate to the folder in which the project is saved (change directory) 
```bash
cd [Path to THE APP FOLDER]
```

yarn
```bash
yarn install
```

ngrok
```bash
ngrok http 3000
```

1. Copy the address from the first forwarding line. Looks similarly to this: http://83a90536.ngrok.io
2. Open the file tfg-app / src / api / index.js
3. Exchange the copied line from ngrok with the baseURL (line 6) and save. Make sure to keep the " ".

Start the project
```bash
expo start
```

## Simulators

### iOS
If you want to run the code on iPhone simulator, we recommend that you install Xcode from App Store. Once installed, click on "Run on iOS simulator" in the browser.

### Android
If you want to run the code on Android simulator, we recommend that you install Android Studio. When opening the program, click on “Configure”, “AVD Manager” and “Create Virtual Device”. Once this is done, click on "Run on Android device/emulator" in the browser.

### Own mobile device
If you want to run the code on your own mobile device, go to App Store or Google Play and download “Expo” from Expo Project. When installed, open your camera and scan the QR code that is displayed at the tap-window in your browser or terminal.
