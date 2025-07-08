import { useEffect, useState } from 'react';
import { register } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

function Register() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setFullname('');
        setEmail('');
        setPhone('');
        setPassword('');
        setPassword2('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const { error } = await register(fullname, email, mobile, password, password2);
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate('/');
            resetForm();
        }
    }
    return (
        <>
            <div>Register</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Full Name'
                    name=""
                    id="username"
                    onChange={(e) => setFullname(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder='Email Address'
                    name=""
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="number"
                    placeholder='Mobile Number'
                    name=""
                    id="phone"
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    id="password"
                    placeholder='Password'
                    name=""
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    id="confirm-password"
                    placeholder='Confirm Password'
                    name=""
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <br />
                <br />
                <button type='submit'>Register</button>

            </form>
        </>
    )
}

export default Register