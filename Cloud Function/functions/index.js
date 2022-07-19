const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

async function assignUserRole(user) {
  const { uid } = user
  try {
    await admin
      .firestore()
      .collection('users')
      .doc(uid)
      .set({ role: 'user' }, { merge: true })
  } catch(error) {
    console.log(error)
  }
}

exports.assignUserRole = functions.auth.user().onCreate(assignUserRole)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
