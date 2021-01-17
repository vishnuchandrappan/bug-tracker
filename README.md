# B Tracker

Bugs tracking application with react and firebase.

## 📌 Getting Started

* clone this repository
```bash
git clone https://github.com/vishnuchandrappan/bug-tracker.git
```

* move to the project directory
```bash
cd bug-tracker
```

* install dependencies
```bash
yarn
```
<center>OR</center>

```bash
npm install
```


## 📌 Firebase setup

* Create a firebase project :[ here 🔗](https://console.firebase.google.com/u/0/)
* Add a new web-app to the project
  - Project overview > add new project
* Copy firebase config
  - Project Settings > Click on app you've created
  - under `Firebase SDK snippet` click on config and copy the contents
  - looks like,
```bash
const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  databaseURL: "https://xxxxx.firebaseio.com",
  projectId: "xxxxx",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "xxxxx-xxxxx-xxxxx-xxxxx",
  measurementId: "xxxxx-xxxxx"
};
```
* rename `src/utils/firebase.example.js` to `firebase.js`
```bash
mv src/utils/firebase.example.js src/utils/firebase.js
```
* paste the copied config in `firebase.js`

<br>

## 📌 Thats it !
```bash
yarn start
```