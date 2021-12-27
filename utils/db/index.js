const admin = require('firebase-admin');
var serviceAccount;
try{
    // For Dev Build on local Machine
    serviceAccount = require('./serviceAccountKey.json');
    console.log(serviceAccount)
}
catch{
    // For Netlify Deployment
    serviceAccount = {
      type: process.env.type,
      project_id: process.env.project_id,
      private_key_id: process.env.private_key_id,
      private_key: process.env.private_key,
      client_email: process.env.client_email,
      client_id: process.env.client_id,
      auth_uri: process.env.auth_uri,
      token_uri: process.env.token_uri,
      auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
      client_x509_cert_url: process.env.client_x509_cert_url
    }
    console.log(serviceAccount)
}
//initialize admin SDK using serviceAcountKey
if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error) {
      console.log('Firebase admin initialization error', error.stack);
    }
}
  export default admin.firestore();