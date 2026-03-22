// Firebase Configuration for UofT Temerty Medicine Alumni
// ========================================================
// Project: mmptsm-73eaf
//
// FIRESTORE SECURITY RULES (for production):
// Go to Firestore > Rules and set:
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /event-registrations/{document} {
//       allow create: if true;
//       allow read, update, delete: if false;
//     }
//   }
// }

const firebaseConfig = {
  apiKey: "AIzaSyAX-s8W9KJ_TT-4SZOu44sIYxzUpzxeWJY",
  authDomain: "mmptsm-73eaf.firebaseapp.com",
  projectId: "mmptsm-73eaf",
  storageBucket: "mmptsm-73eaf.firebasestorage.app",
  messagingSenderId: "313450431514",
  appId: "1:313450431514:web:fb82b81a10653b1266bda3",
  measurementId: "G-86S7E6PMTR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
