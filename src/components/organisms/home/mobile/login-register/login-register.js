import { useSelector } from 'react-redux'
import { loginRegister } from '../mobile-menu/utils/utils'
import styles from './login-register.module.css'

const LoginRegister = ({ setUserName, isLoggedIn, setIsLoggedIn, openSnackbar, password, setPassword, setIsFetching }) => {
    const { userName } = useSelector((state) => state.philosophersData)
    const capitalizedUserName = userName?.charAt(0).toUpperCase() + userName.slice(1)

    return (
        <>
            {!isLoggedIn ? (
                <>
                    Username
                    <input type="text" className={styles.userInput} onChange={(e) => setUserName(e.target.value)} value={userName} />
                    Password
                    <input type="password" className={styles.userInput} onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className={styles.menuBtn} onClick={() => loginRegister({ apiCallType: 'login', userName, password, setIsLoggedIn, openSnackbar, setIsFetching })}>
                        Login
                    </button>
                    <button className={styles.menuBtn} onClick={() => loginRegister({ apiCallType: 'register', userName, password, setIsLoggedIn, openSnackbar, setIsFetching })}>
                        Register
                    </button>
                </>
            ) : (
                <div>
                    <div className={styles.userName}>Hi {capitalizedUserName}!</div>
                    <button className={styles.menuBtn} onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>
                </div>
            )}
        </>
    )
}

export default LoginRegister
