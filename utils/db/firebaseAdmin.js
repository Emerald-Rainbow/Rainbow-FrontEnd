const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

//initialize admin SDK using serviceAcountKey
if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(serviceAccount.replace(/\n/gm, "\n"))),
      });
    } catch (error) {
      console.log('Firebase admin initialization error', error.stack);
    }
}

export default admin.firestore();
