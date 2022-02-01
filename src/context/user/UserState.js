import {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';

import UserContext from './UserContext';
import app from 'src/firebase/getFirebaseApp';
 

function UserState(props) {
    const auth = getAuth(app);
    const [user, userLoading, userError] = useAuthState(auth);

    const logout = ()=>{
        signOut(auth);
    }
    return(
        <UserContext.Provider value={{user, userLoading, userError, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;