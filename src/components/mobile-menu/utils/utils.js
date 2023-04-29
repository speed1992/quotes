import { retryTenTimes } from '../../../common/utils/apiUtils'

export const sendUserDetails = async ({ userName, markedQuotes }) => {
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
        alert(JSON.stringify(response))
    }
}
