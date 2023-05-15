import { useState } from 'react'
import { loginRegister } from '../mobile-menu/utils/utils'

const LoginRegister = ({ setUserName, userName, setIsLoggedIn, openSnackbar }) => {
    const [password, setPassword] = useState('')
    return (
        <>
            Username
            <input type="text" className="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
            Password
            <input type="password" className="userName" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={() => loginRegister({ userName, password, setIsLoggedIn, openSnackbar })}>Register/Login</button>
        </>
    )
}

export default LoginRegister
