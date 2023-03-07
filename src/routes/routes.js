import React from 'react'

const HomePage = React.lazy(() => import('../components/home-page/home-page'))
const QuoteImage = React.lazy(() => import('../components/generate-quote-image/generateQuoteImage'))

const ROUTES = {
    homepage: {
        route: '/quotes',
        component: HomePage,
    },
    image: {
        route: '/image',
        component: QuoteImage,
    },
}

export default ROUTES
