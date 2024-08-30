import React from 'react'
import { useSelector } from 'react-redux'

const QuotesFound = () => {
    const { markedMode, currentData } = useSelector((state) => state.philosophersData)
    const found = currentData?.length
    if (found) {
        return markedMode ? <>Found: {found} </> : <>Quotes Found: {found} </>
    }
}

export default QuotesFound
