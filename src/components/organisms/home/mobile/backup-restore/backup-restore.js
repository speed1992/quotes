import { getUserDetails, sendUserDetails } from '../mobile-menu/utils/utils'

const BackupRestore = ({ setUserName, userName, markedQuotes, openSnackbar, setMarkedQuotes }) => {
    return (
        <>
            Username
            <input className="userName" type="text" value={userName} disabled />
            <button onClick={() => sendUserDetails({ userName, markedQuotes, openSnackbar })}>Backup</button>
            <button onClick={() => getUserDetails({ userName, markedQuotes, openSnackbar, setMarkedQuotes })}>Restore</button>
        </>
    )
}

export default BackupRestore
