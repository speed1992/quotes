import React from 'react'

// Make sure to only include the library in development
if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
        trackAllPureComponents: true,
        trackHooks: true,
        logOnDifferentValues: true,
        include: [/./], // Regex to include all components
        exclude: [/^SomeComponentToExclude$/], // Optional: Regex to exclude specific components
        collapseGroups: true, // Collapses log groups for readability
        trackExtraHooks: [],
    })
}
