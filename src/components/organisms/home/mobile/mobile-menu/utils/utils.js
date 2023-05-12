import { retryTenTimes } from '../../../../../../common/utils/apiUtils'

export const sendUserDetails = async ({ userName, markedQuotes, openSnackbar }) => {
    if (userName === 'philosophizetruth') {
        let response = await retryTenTimes(
            async () =>
                await fetch('https://quotes-backend.vercel.app/api/markedQuotes/', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId: 1,
                        markedQuotes,
                        dateSynced: Date.now(),
                    }),
                })
        )

        response = await response.json()
        openSnackbar(JSON.stringify(response), 2000)
    }
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
        // console.log(response[0].markedQuotes)
        setMarkedQuotes(response[0].markedQuotes)
        openSnackbar('Restored data', 2000)
    }
}
