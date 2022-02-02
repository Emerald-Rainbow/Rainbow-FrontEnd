import {doc, setDoc, collection, getDoc, getFirestore, query} from 'firebase/firestore';
import app from './getFirebaseApp';

const db = getFirestore();

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

export {setUserProfile}