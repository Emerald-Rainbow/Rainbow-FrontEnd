import {useContext} from 'react';
import UserContext from '@context/user/UserContext';
import { useRouter } from 'next/router';

export default function profile() {
    const router = useRouter();
    const {user, userLoading, userError, logout} = useContext(UserContext);
    if(!userLoading && !user)
    {
        router.push('/signup');
    }
    return(null)
}