import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHomePageHooks } from '../../../components/organisms/home/home-page/utils/hooks'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../static/utils/utils'
import { toggleFeatureRedux } from './allPhilosophersRedux'

export default function AllPhilosophers() {
    const dispatch = useDispatch()
    const toggleFeature = (status) => dispatch(toggleFeatureRedux(status))
    const { options, setOptions } = useHomePageHooks()

    useEffect(() => {
        options.map(({ value: currentPhilosopher }) => {
            if (currentPhilosopher !== undefined) {
                const currentPhilosopherQuotes = getPhilosopherQuotes({ philosopher: currentPhilosopher, options })
                if (!currentPhilosopherQuotes) {
                    lazyLoadAsset(currentPhilosopher, { options, setOptions })
                }
            }
        })
    }, [])
    return (
        <>
            AllPhilosophers<button onClick={() => toggleFeature()}>Toggle</button>
        </>
    )
}
