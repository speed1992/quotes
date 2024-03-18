import { API_ENDPOINTS } from '../../../apis/apiEndpoints'
import { retryTenTimes } from '../../../utils/apiUtils'

export const lazyLoadAllPhilosophersQuotes = ({ options, setIsFetching, setAllData }) => {
    return new Promise(async (resolve, reject) => {
        let quotes = []
        for (let index = 0; index < options.length; index++) {
            const philosopherName = options[index].value

            const fileName = philosopherName.toLowerCase()
            await retryTenTimes(() => fetch(API_ENDPOINTS.STATIC_DATA.STATIC_QUOTES + fileName + '.json'))
                .then((response) => response.json())
                .then((data) => {
                    data = data.map((obj) => ({ ...obj, philosopher: philosopherName }))
                    quotes = [...quotes, ...data]
                })
                .catch((e) => reject(e))
        }
        setIsFetching(false)
        console.log(quotes)
        setAllData(quotes)
        resolve(quotes)
    })
}
