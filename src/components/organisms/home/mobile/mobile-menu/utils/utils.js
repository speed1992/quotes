import { retryTenTimes } from '../../../../../../common/utils/apiUtils'

export const sendUserDetails = async ({ userName, markedQuotes, openSnackbar }) => {
    let response = await retryTenTimes(
        async () =>
            await fetch('https://quotes-backend.vercel.app/api/markedQuotes/', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName,
                    markedQuotes,
                    dateSynced: Date.now(),
                }),
            })
    )

    response = await response.json()
    openSnackbar(JSON.stringify(response))
}

export const getUserDetails = async ({ userName, markedQuotes, openSnackbar, setMarkedQuotes }) => {
    if (userName === 'philosophizetruth') {
        let response = await retryTenTimes(
            async () =>
                await fetch('https://quotes-backend.vercel.app/api/markedQuotes/', {
                    method: 'get',
                    headers: { 'Content-Type': 'application/json' },
                })
        )

        response = await response.json()
        setMarkedQuotes(response[0].markedQuotes)
        openSnackbar('Restored data', 2000)
    }
}

export const loginRegister = async ({ apiCallType, userName, password, setIsLoggedIn, openSnackbar }) => {
    let response
    if (apiCallType === 'login') {
        response = await retryTenTimes(
            async () =>
                await fetch(`https://quotes-backend.vercel.app/api/user/?userName=${userName}`, {
                    method: 'get',
                    headers: { 'Content-Type': 'application/json' },
                })
        )
    } else {
        response = await retryTenTimes(
            async () =>
                await fetch('https://quotes-backend.vercel.app/api/user/', {
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
        openSnackbar(userName + ' ' + JSON.stringify(response.serverResponse))
    } else {
        openSnackbar(JSON.stringify(response.error))
    }
}
