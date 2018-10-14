//import * as functions from 'firebase-functions';
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((request, response) => {
    //Read the username from the query parameter
    const txt = request.query.text;
    return admin.database().ref('/users').push({ original: txt }).then((snapshot) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        return response.redirect(303, snapshot.ref);
    });
});
//# sourceMappingURL=index.js.map