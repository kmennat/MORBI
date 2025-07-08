import { useEffect } from 'react';
// import { LoggedOutView } from '../shop/home';
import { logout } from '../../utils/auth';
import { Link } from 'react-router-dom';

function Logout() {
    useEffect(() => {
        logout();
    }, []);
    return (
        <div>
            <h3>You have been logged out</h3>
            <Link to={'/login'}>Login</Link>
            <br />
            <br />
            <Link to={'/register'}>Register</Link>
        </div>
    )

};

export default Logout;