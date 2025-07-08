import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import apiInstance from '../../utils/axios';

function CreatePassword() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const [searchParam] = useSearchParams()
    const otp = searchParam.get("otp")
    const uidb64 = searchParam.get("uidb64")


    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError(true);
            console.log("Password Does Not Match");
        } else {
            const formdata = new FormData()
            formdata.append("otp", otp)
            formdata.append("uidb64", uidb64)
            // formdata.append("reset_token", reset_token)
            formdata.append("password", password)
            console.log(formdata);

            try {
                apiInstance.post(`user/password-change/`, formdata).then((res) => {
                    console.log(res.data);
                    alert("Password Changed Successfully")
                    navigate("/login")
                })
            }
            catch (error) {
                alert("An error occured while trying to change the password")
            }


        }
    }

    return (
        <div>
            <h1>Create New Password</h1>
            <form onSubmit={handlePasswordSubmit}>
                <input onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Enter New Password'
                    name=""
                    id=""
                />
                <br />
                <br />
                <input onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder='Confirm New Password'
                    name=""
                    id=""
                />
                <br />
                <br />
                <button type='submit'>Save New Password</button>
            </form>
        </div>

    )
}
export default CreatePassword