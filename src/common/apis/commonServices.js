import { retryTenTimes } from '../utils/apiUtils'
import { API_ENDPOINTS } from './apiEndpoints'

export const sendErrorDetails = async ({ userName, errorDetails }) => {
    await retryTenTimes(async () => {
        return await fetch(API_ENDPOINTS.ERROR.SEND, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName,
                errorDetails,
            }),
        })
    })
}
