import {doc, setDoc, collection, getDoc, getFirestore, query, where } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Router  from 'next/router';

const db = getFirestore();
const auth = getAuth();


const getFollowing = async (userUid, followingUid) => {
    const followingRef = doc(db,"users", userUid, 'public', 'relations', 'following', followingUid);
    const followingDoc = await getDoc(followingRef);
    if(followingDoc.exists())
        return true;
    return false;
}

export {getFollowing};