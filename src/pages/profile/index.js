import {useContext} from 'react';
import UserContext from '@context/user/UserContext';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';

export default function profile() {
    const {user, userLoading, userError, logout} = useContext(UserContext);

    // setTimeout(logout,5000);
    return(
    <>
        <ProtectedRoute>
            <h1>
                Profile Page  
                {userLoading  && " Loading"}
                {user && user.displayName}
            </h1>
        </ProtectedRoute>
    </>)
}