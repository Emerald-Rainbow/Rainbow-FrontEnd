const fs = require('fs')

const pathAdmin = './utils/db/serviceAccountKey.json'
const adminConfig = `
{
    "type":"${process.env.type}",
    "project_id":"${process.env.project_id}",
    "private_key_id":"${process.env.private_key_id}",
    "private_key":"${process.env.private_key}",
    "client_email":"${process.env.client_email}",
    "client_id":"${process.env.client_id}",
    "auth_uri":"${process.env.auth_uri}",
    "token_uri":"${process.env.token_uri}",
    "auth_provider_x509_cert_url":"${process.env.auth_provider_x509_cert_url}",
    "client_x509_cert_url":"${process.env.client_x509_cert_url}"
}
    `
    
fs.open(pathAdmin,'r',function(err, fd){
    if (err) {
      fs.writeFileSync(pathAdmin, JSON.stringify(adminConfig?.replace(/\\n/g, '\n')), function(err) {
          if(err) {
              console.log(err);
          }
          console.log("The file was saved!");
      });
    } else {
      console.log("The file exists!");
    }
});


const pathApp = './utils/db/firebaseConfig.js'
const appConfig = `
const firebaseConfig = {
    apiKey:"${process.env.apiKey}",\n
    authDomain:"${process.env.authDomain}",\n
    projectId:"${process.env.projectId}",\n
    storageBucket:"${process.env.storageBucket}",\n
    messagingSenderId:"${process.env.messagingSenderId}",\n
    appId:"${process.env.appId}",\n
    measurementId:"${process.env.measurementId}"\n
};
export default firebaseConfig;
`
    
fs.open(pathApp,'r',function(err, fd){
    if (err) {
      fs.writeFileSync(pathApp, appConfig, function(err) {
          if(err) {
              console.log(err);
          }
          console.log("The file was saved!");
      });
    } else {
      console.log("The file exists!");
    }
});

