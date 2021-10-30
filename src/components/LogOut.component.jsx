import  { useEffect } from 'react';
import { logout, getCurrentUser } from './service/user-service';


const LogOut = () => {
        useEffect(()=> {
                const email = getCurrentUser().email;
                const user = {"email": email }
                console.log(user)
                logout(user);
        })
        return null;
}
 
export default LogOut;