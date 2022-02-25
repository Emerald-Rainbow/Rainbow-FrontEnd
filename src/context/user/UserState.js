import {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';

import UserContext from './UserContext';
import app from 'src/firebase/getFirebaseApp';
import { getUserById } from '@firebaseUtils/userControl';
 

function UserState(props) {
    const auth = getAuth(app);
    const [user, userLoading, userError] = useAuthState(auth);
    const [userData , setUserData] = useState('');

    useEffect(async ()=>{
        if(user){
    const userData = await getUserById(user.uid);
    setUserData(userData);
        }
    },[user]);

    const logout = ()=>{
        signOut(auth);
    }
    return(
        <UserContext.Provider value={{user, userLoading, userError, logout, userData}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;