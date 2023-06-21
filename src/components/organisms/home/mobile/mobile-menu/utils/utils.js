import { retryTenTimes } from '../../../../../../common/utils/apiUtils'

export const sendUserDetails = async ({ userName, markedQuotes, openSnackbar, setSyncDate }) => {
    let response = await retryTenTimes(async () => {
        return await fetch('https://quotes-backend.vercel.app/api/markedQuotes/backup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName,
                markedQuotes,
                dateSynced: Date.now(),
            }),
        })
    })

    response = await response.json()
    openSnackbar('Auto-Sync :' + JSON.stringify(response), 5000)
}

export const getUserDetails = async ({ userName, markedQuotes, openSnackbar, setMarkedQuotes }) => {
    let response = await retryTenTimes(
        async () =>
            await fetch('https://quotes-backend.vercel.app/api/markedQuotes/restore', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName,
                }),
            })
    )

    response = await response.json()
    if (response?.ok) {
        try {
            const markedQuotesFromServer = response?.results?.[0]?.markedQuotes
            const markedQuotesFromServerCount = Object.values(markedQuotesFromServer).flat().length
            if (markedQuotesFromServer && markedQuotesFromServerCount > 0) {
                return { markedQuotesFromServer, dateFromServer: response?.results?.[0]?.dateSynced }
                // setMarkedQuotes(response?.results?.[0]?.markedQuotes)
            }
        } catch (error) {
            openSnackbar(JSON.stringify(error))
        }
    } else {
        openSnackbar(JSON.stringify(response.error))
    }
}

export const loginRegister = async ({ apiCallType, userName, password, setIsLoggedIn, openSnackbar }) => {
    const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1)
    let response
    if (apiCallType === 'login') {
        response = await retryTenTimes(
            async () =>
                await fetch('https://quotes-backend.vercel.app/api/user/login', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userName,
                        password,
                    }),
                })
        )
    } else {
        response = await retryTenTimes(
            async () =>
                await fetch('https://quotes-backend.vercel.app/api/user/create', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userName,
                        password,
                    }),
                })
        )
    }

    response = await response.json()

    if (response?.ok) {
        setIsLoggedIn(true)
        openSnackbar(capitalizedUserName + ' ' + JSON.stringify(response.serverResponse))
    } else {
        openSnackbar(JSON.stringify(response.error))
    }
}
