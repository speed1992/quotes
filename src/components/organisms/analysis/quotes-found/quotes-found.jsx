import React from 'react'

const QuotesFound = ({ found, markedMode }) => {
    if (found) {
        return markedMode ? <>Found: {found} </> : <>Quotes Found: {found} </>
    }
}

export default QuotesFound
