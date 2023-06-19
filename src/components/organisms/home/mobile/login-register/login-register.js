import { useEffect } from 'react'
import { getUserDetails, loginRegister, sendUserDetails } from '../mobile-menu/utils/utils'

const LoginRegister = ({ setUserName, userName, isLoggedIn, setIsLoggedIn, openSnackbar, markedQuotes, setMarkedQuotes, password, setPassword }) => {
    const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1)

    useEffect(() => {
        if (isLoggedIn) {
            ;(async () => {
                const markedQuoteClientCount = Object.values(markedQuotes).flat().length
                let { markedQuotesFromServer, dateFromServer } = await getUserDetails({ userName, markedQuotes, openSnackbar, setMarkedQuotes })
                if (markedQuotesFromServer) {
                    const markedQuotesFromServerCount = Object.values(markedQuotesFromServer).flat().length
                    if (markedQuotesFromServerCount > markedQuoteClientCount) {
                        setMarkedQuotes(markedQuotesFromServer)
                        openSnackbar('Auto-Sync :' + 'Restored all marked quotes!', 2000)
                    } else if (markedQuoteClientCount > markedQuotesFromServerCount) {
                        var currentClientDate = new Date()
                        currentClientDate.setHours(0, 0, 0, 0)
                        dateFromServer = new Date(dateFromServer)
                        dateFromServer.setHours(0, 0, 0, 0)
                        if (currentClientDate > dateFromServer) {
                            await sendUserDetails({ userName, markedQuotes, openSnackbar })
                        }
                    }
                }
            })()
        }
    }, [])

    return (
        <>
            {!isLoggedIn ? (
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
            ) : (
                <>
                    <div className="userName">Hi {capitalizedUserName}!</div>
                    <button className="menuBtn" onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>
                </>
            )}
        </>
    )
}

export default LoginRegister
