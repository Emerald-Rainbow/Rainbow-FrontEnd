import {doc, setDoc, collection, getDoc, getFirestore, query} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Router  from 'next/router';

const db = getFirestore();
const auth = getAuth();

function getProfileInfoRef(uid,visibility) {
    const profileInfoRef = null;
    if(['public','private'].includes(visibility))
        profileInfoRef  =  doc(db,"users", uid, visibility, 'ProfileInfo');
    return profileInfoRef;
}

 
async function setUserProfile(user) {
    try {
        console.log(user);
        const publicRef  = getProfileInfoRef(user.uid,'public');
        const privateRef = getProfileInfoRef(user.uid,'private');
        await setDoc(publicRef,{
            Username: user.username,
            Bio: user.bio
        });
        await setDoc(privateRef,{
            PhoneNumber: user.phone,
            Nationality: user.nationality
        });     
    } catch (error) {
        console.log(error.message);
    }
}


async function signIn() {
  console.log("signInWithGoogle");
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .then(async () => {
      try {
        const publicRef = getProfileInfoRef(auth.currentUser.uid, "public");
        const docSnap = await getDoc(publicRef);
        if (docSnap.exists()) {
          console.log("user already exists");
        } else {
          console.log("User does not exist");
          Router.push("/editProfile");
        }
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
    });
}

export {setUserProfile, signIn}