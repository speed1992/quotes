import React from 'react'
import { checkQueryParams } from './common/utils/urlUtils'

// Make sure to only include the library in development
if (checkQueryParams('dev')) {
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
