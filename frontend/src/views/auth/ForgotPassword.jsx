import { useEffect, useState } from 'react';
import apiInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const handelSubmit = () => {
        try {
            apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                alert("An Email has been Sent to you.")
                // navigate("/create-new-password");
            })
        } catch (error) {
            alert("Email does not exists.")
        }

    }

    return (
        <div>
            <h1>Forgot Password</h1>
            <input onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Enter Email'
                name=""
                id=""
            />
            <br />
            <br />
            <button onClick={handelSubmit}>Reset Password</button>
        </div>
    )
}

export default ForgotPassword