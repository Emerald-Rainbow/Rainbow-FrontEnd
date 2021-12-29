// Reference
// https://stackoverflow.com/questions/60922198/firebase-storage-upload-image-file-from-node-js

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
