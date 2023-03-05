import React from 'react'

export const QuotesFound = ({ found, markedMode }) => (markedMode ? <>Found: {found} </> : <>Quotes Found: {found} </>)
