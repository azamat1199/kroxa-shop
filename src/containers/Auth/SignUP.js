import React, { useState } from "react";
import { auth } from "../../configs/firebase";


export default function SignUp() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [errorMsg, SetErrorMsg] = useState({
        code: '',
        message: '',
    });

    const handleInputChang = (e) => {
        const { name, value } = e.target;
        setUser(state => ({ ...state, [name]: value }));
    }

    const handleSignUp = async () => {
        try {
            const { email, password } = user;
            const authenticatedUser = await auth.createUserWithEmailAndPassword(email, password) ;
            console.log(authenticatedUser);
        } catch (error) {
            console.log(error);
            SetErrorMsg({ code: error.code, message: error.message })
        }
    }

    const { email, password } = user;
    console.log(errorMsg);

    return (
        <div>
            <h2>Sign Up</h2>
            {errorMsg.message && <p>{errorMsg.message}</p>}
            <p>
                <label >Email</label>
                <input type="email" name="email" onChange={handleInputChang}/>
            </p>
            <p>
                <label >Password</label>
                <input type="password" name="password" onChange={handleInputChang}/>
            </p>
            <p>
                <button disabled={!email && !password} onClick={handleSignUp}>Sign Up</button>
            </p>
        </div>
    )
}