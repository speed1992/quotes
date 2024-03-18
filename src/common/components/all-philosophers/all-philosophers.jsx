import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllDataRedux, setIsFetchingRedux, toggleFeatureRedux } from './allPhilosophersRedux'
import { lazyLoadAllPhilosophersQuotes } from './utils/utils'

export default function AllPhilosophers() {
    const dispatch = useDispatch()
    const setIsFetching = (status) => dispatch(setIsFetchingRedux(status))
    const setAllData = (status) => dispatch(setAllDataRedux(status))
    const toggleFeature = (status) => dispatch(toggleFeatureRedux(status))
    const options = useSelector((state) => state.philosophersData?.options)

    useEffect(() => {
        setIsFetching(true)
        lazyLoadAllPhilosophersQuotes({ options, setIsFetching, setAllData })
    }, [])
    return (
        <>
            AllPhilosophers<button onClick={() => toggleFeature()}>Toggle</button>
        </>
    )
}
