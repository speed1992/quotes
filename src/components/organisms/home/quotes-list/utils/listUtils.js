import React from 'react'
import { retryTenTimes } from '../../../../../common/utils/apiUtils'
const NoSearchResults = React.lazy(() => retryTenTimes(() => import('../../../analysis/no-search-results/no-search-results')))

export function NoRowsRenderer() {
    return <NoSearchResults />
}
