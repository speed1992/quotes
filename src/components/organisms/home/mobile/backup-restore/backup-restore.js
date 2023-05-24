import { getUserDetails, sendUserDetails } from '../mobile-menu/utils/utils'

const BackupRestore = ({ userName, markedQuotes, openSnackbar, setMarkedQuotes, setIsLoggedIn }) => {
    const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1)

    let markedQuoteCount
    try {
        markedQuoteCount = Object.values(markedQuotes).flat().length
    } catch (error) {
        console.log(error)
    }
    return (
        <>
            <div className="userName">Hi {capitalizedUserName}!</div>
            {markedQuoteCount > 0 && (
                <button className="menuBtn" onClick={() => sendUserDetails({ userName, markedQuotes, openSnackbar })}>
                    Backup
                </button>
            )}
            <button className="menuBtn" onClick={() => getUserDetails({ userName, markedQuotes, openSnackbar, setMarkedQuotes })}>
                Restore
            </button>
            <button className="menuBtn" onClick={() => setIsLoggedIn(false)}>
                Logout
            </button>
        </>
    )
}

export default BackupRestore
