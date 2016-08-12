module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/bower_components/firebase/firebase.js',
    '/bower_components/google-chart/loader.js'
  ],
  navigateFallback: '/index.html',
  excludePaths: ['https://prymtymeapp.firebaseapp.com/__/auth/handler?apiKey=AIzaSyBi00fVYW26MvFFCqUFOzWYQpaBwi5rE40&appName=prymtym&authType=signInViaPopup&providerId=google.com&eventId=402790061&v=3.0.5']

};
