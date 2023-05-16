import { useState } from 'react'
import { loginRegister } from '../mobile-menu/utils/utils'

const LoginRegister = ({ setUserName, userName, setIsLoggedIn, openSnackbar }) => {
    const [password, setPassword] = useState('')
    return (
        <>
            Username
            <input type="text" className="userInput" onChange={(e) => setUserName(e.target.value)} value={userName} />
            Password
            <input type="password" className="userInput" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className="menuBtn" onClick={() => loginRegister({ apiCallType: 'login', userName, password, setIsLoggedIn, openSnackbar })}>
                Login
            </button>
            <button className="menuBtn" onClick={() => loginRegister({ apiCallType: 'register', userName, password, setIsLoggedIn, openSnackbar })}>
                Register
            </button>
        </>
    )
}

export default LoginRegister
