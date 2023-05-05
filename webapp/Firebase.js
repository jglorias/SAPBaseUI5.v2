sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  const firebaseConfig = {
    apiKey: "AIzaSyBJYq3xg40-b2Y7VvafmTU0PaFDYj26GvU",
    authDomain: "nodebaseui5.firebaseapp.com",
    projectId: "nodebaseui5",
    storageBucket: "nodebaseui5.appspot.com",
    messagingSenderId: "303832489388",
    appId: "1:303832489388:web:03c533b3cca544fce6ee09",
    measurementId: "G-XHWGEQ8ESM",
  };

  return {
    initializeFirebase: function () {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const firestore = firebase.firestore();

      const fireAuth = firebase.auth();


      const oFirebase = {
        firestore: firestore,
        fireAuth: fireAuth,
      };

      var fbModel = new JSONModel(oFirebase);
      return fbModel;
    },
  };
});
