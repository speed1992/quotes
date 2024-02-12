import { getPhilosopherQuotes, lazyLoadAsset } from '../../../../../common/static/utils/utils'

export function lazyInit(currentPhilosopher, options, setOptions, setCurrentData, setIsFetching) {
    try {
        if (currentPhilosopher !== undefined) {
            const currentPhilosopherQuotes = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
            if (!currentPhilosopherQuotes) {
                lazyLoadAsset(currentPhilosopher, { options, setOptions }, [setCurrentData])
            }
        }

        setIsFetching(false)
    } catch (e) {
        console.log(e)
    }
}
