import React from 'react'
import { retryTenTimes } from '../common/utils/apiUtils'

const HomePage = React.lazy(() => retryTenTimes(() => import('../components/home-page/home-page')))
const QuoteImage = React.lazy(() => retryTenTimes(() => import('../components/generate-quote-image/generateQuoteImage')))
const Report = React.lazy(() => retryTenTimes(() => import('../components/report/report')))

const ROUTES = {
    homepage: {
        route: '/',
        component: HomePage,
    },
    image: {
        route: '/image',
        component: QuoteImage,
    },
    report: {
        route: '/report',
        component: Report,
    },
}

export default ROUTES
