sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  // Firebase-config retrieved from the Firebase-console
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
      // Initialize Firebase with the Firebase-config
      firebase.initializeApp(firebaseConfig);

      // Create a Firestore reference
      const firestore = firebase.firestore();

      // Firebase services object
      const oFirebase = {
        firestore: firestore,
      };

      // Create a Firebase model out of the oFirebase service object which contains all required Firebase services
      var fbModel = new JSONModel(oFirebase);

      // Return the Firebase Model
      return fbModel;
    },
  };
});
