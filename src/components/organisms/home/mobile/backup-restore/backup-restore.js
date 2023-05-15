import { getUserDetails, sendUserDetails } from '../mobile-menu/utils/utils'

const BackupRestore = ({ setUserName, userName, markedQuotes, openSnackbar, setMarkedQuotes }) => {
    const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1)
    return (
        <>
            <div className="userName">Hi {capitalizedUserName}!</div>
            <button onClick={() => sendUserDetails({ userName, markedQuotes, openSnackbar })}>Backup</button>
            <button onClick={() => getUserDetails({ userName, markedQuotes, openSnackbar, setMarkedQuotes })}>Restore</button>
        </>
    )
}

export default BackupRestore
